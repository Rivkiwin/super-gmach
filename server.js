app.use(express.static('./dist/super-gmach'));

app.get(function(req, res) {
  res.sendFile(index.html, {root: 'dist/super-gmach/'}
);
});
app.listen(process.env.PORT || 8080);