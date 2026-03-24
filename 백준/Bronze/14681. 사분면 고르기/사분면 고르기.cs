using System;
using System.Linq;

class Program {
    static void Main(string[] args) {
      int? inputX = int.Parse(Console.ReadLine());
      int? inputY = int.Parse(Console.ReadLine());
        
      if(inputX > 0 && inputY > 0) {
          Console.WriteLine(1);
      } else if(inputX < 0 && inputY > 0) {
          Console.WriteLine(2);
      } else if(inputX < 0 && inputY < 0) {
          Console.WriteLine(3);
      } else if(inputX > 0 && inputY < 0) {
          Console.WriteLine(4);
      }
    }
}