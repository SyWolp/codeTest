def solution(A,B):
    answer = 0
    i = 0
    A.sort()
    B.sort()
    B.reverse()
    for aa in A:
        
        answer += aa * B[i]
        i += 1
    return answer