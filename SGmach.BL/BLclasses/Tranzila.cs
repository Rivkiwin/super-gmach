using System;
using System.IO;
using System.Net;
using System.Text;
using System.Web;
using DTO.classes.user_classes;

namespace SGmach.BL.BLclasses {
    public class Tranzila {

        public static bool Addcharge (Crdit credite) {
            //Preparing proper encoding object
            Encoding enc = Encoding.GetEncoding ("windows-1255");
            //Creating the data string while converting data into proper format
            //Initialization
            string postData = "supplier=" + "terminalname";
            //Going through the rest of parameters
            postData += ("&ccno=" + "4444333322221111");
            postData += ("&expmonth=" + "09");
            postData += ("&expyear=" + "08");
            postData += ("&sum=" + "45.70");
            //All the textual parameters should go through encoding conversion
            postData += ("&first_name=" + HttpUtility.UrlEncode ("ישראל", enc));
            postData += ("&last_name=" + HttpUtility.UrlEncode ("ישראל", enc));
            postData += ("&company=" + HttpUtility.UrlEncode ("סלטים יוסי", enc));
            //Translating final data string into byte array format
            byte[] data = Encoding.ASCII.GetBytes (postData);
            // Preparing web request
            HttpWebRequest myRequest =
                (HttpWebRequest) WebRequest.Create ("https://secure5.tranzila.com/cgi-bin/tranzila31.cgi");
            myRequest.Method = "POST";
            myRequest.ContentType = "application/x-www-form-urlencoded";
            myRequest.ContentLength = data.Length;
            Stream newStream = myRequest.GetRequestStream ();
            // Sending the data
            newStream.Write (data, 0, data.Length);
            //Reading of responce and taking care of the result should be placed here.
            //PLACEHOLDER
            //Finalizing the sending process
            newStream.Close ();
            //Return result to calling code
            return true;
        }
        public static string AddCredite (Crdit credite) {

            string postData = "supplier=" + "test";
            postData += ("&TranzilaTK=" + "1");
            postData += ("&ccno=" + "4444333322221111");
            postData += ("&TranzilaPW=" + "test");
            byte[] data = Encoding.ASCII.GetBytes (postData);
            // Preparing web request
            HttpWebRequest myRequest =
                (HttpWebRequest) WebRequest.Create ("https://secure5.tranzila.com/cgi-bin/tranzila31.cgi");
            myRequest.Method = "POST";
            myRequest.ContentType = "application/x-www-form-urlencoded";
            myRequest.ContentLength = data.Length;
            Stream newStream = myRequest.GetRequestStream ();
            // Sending the data
            newStream.Write (data, 0, data.Length);
            //Reading of responce and taking care of the result should be placed here.
            //PLACEHOLDER
            //Finalizing the sending process
            newStream.Close ();
            HttpWebResponse response =(HttpWebResponse) myRequest.GetResponse();
            Console.Write((int)response.StatusCode);
             var reader = new StreamReader(response.GetResponseStream());
            string result = reader.ReadToEnd();
             // do something fun...
            // HttpWebResponse statusDescription = (HttpWebResponse)response.StatusDescription;
            return "ss";
        }
    }

}