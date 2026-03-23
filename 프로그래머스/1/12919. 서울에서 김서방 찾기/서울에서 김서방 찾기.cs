using System;

public class Solution {
    public string solution(string[] seoul) {
        string answer = "";
        int index = Array.IndexOf(seoul, "Kim");
        answer = $"김서방은 {index}에 있다";
        
        return answer;
    }
}