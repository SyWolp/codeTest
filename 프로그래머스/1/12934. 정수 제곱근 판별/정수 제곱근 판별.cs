using System;

public class Solution {
    public double solution(long n) {
        double sqrt = Math.Sqrt(n);
        long abc = (long)sqrt;
        
        return sqrt / abc == 1 ? (sqrt + 1) * (sqrt + 1) : -1;
    }
}