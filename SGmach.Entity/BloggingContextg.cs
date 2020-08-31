using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace SGmach.Entity
{
  public class BloggingContext : DbContext
  {
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
      => options.UseSqlite("Data Source=blogging.db");
  }

  public class UsBlogging
  {
    public void use()
    {
      using (var db = new   BloggingContext())
      {
        // Create
        Console.WriteLine("Inserting a new blog");
        db.Add(new Blog {Url = "http://blogs.msdn.com/adonet"});
        db.SaveChanges();

        // Read
        Console.WriteLine("Querying for a blog");
        var blog = db.Blogs
          .OrderBy(b => b.BlogId)
          .First();

        // Update
        Console.WriteLine("Updating the blog and adding a post");
        blog.Url = "https://devblogs.microsoft.com/dotnet";
        blog.Posts.Add(
          new  Post
          {
            Title = "Hello World",
            Content = "I wrote an app using EF Core!"
          });
        db.SaveChanges();
        Console.WriteLine("count:" + db.Posts);
        // Delete
        Console.WriteLine("Delete the blog");
        db.Remove(blog);
        db.SaveChanges();
      }
    }
  }

  public class Blog
  {
    public int BlogId { get; set; }
    public string Url { get; set; }

    public List<Post> Posts { get; } = new List<Post>();
  }

  public class Post
  {
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }

    public int BlogId { get; set; }
    public Blog Blog { get; set; }
  }
}