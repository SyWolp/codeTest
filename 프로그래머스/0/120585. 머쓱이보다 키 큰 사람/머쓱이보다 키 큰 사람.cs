using System;
using System.Linq;

public class Solution {
    public int solution(int[] array, int height) {
        int[] find = array.Where(x => x > height).ToArray();
        
        return find.Length;
    }
}