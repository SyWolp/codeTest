using System;

namespace baekjoon
{
    class Program
    {
        static void Main(string[] args)
        {
            string? input = Console.ReadLine();
            string[]? s = input.Split();
            if(int.Parse(s[0]) > int.Parse(s[1])) {
                Console.WriteLine(">");
            } else if(int.Parse(s[0]) < int.Parse(s[1])) {
                Console.WriteLine("<");
            } else {
                Console.WriteLine("==");
            }
        }
    }
}
