'''
A format for expressing an ordered list of integers is to use a comma separated list of either

    -individual integers
    -or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
# returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
'''

def solution(lst):
    result_str = ''

    i = 0

    start_index = end_index = 0
    end_index = 0

    list_of_intervals = []

    while i < len(lst):
        try:
            if lst[i] + 1 == lst[i+1]:
                end_index = i+1
            else:
                list_of_intervals.append((start_index, end_index))
                start_index = end_index = i+1
        except IndexError:
            if lst[i] - 1 == lst[i-1]:
                    end_index = i
                    list_of_intervals.append((start_index, end_index))
            else:
                list_of_intervals.append((start_index, end_index))
        i += 1
    
    for j in list_of_intervals:
        if j[0] == j[1]:
            result_str = result_str + ',' + f'{lst[j[0]]}'
        elif abs(j[1]) - abs(j[0]) == 1:
            result_str = result_str + ',' + f'{lst[j[0]]},' +  f'{lst[j[1]]}'
        else:
            result_str = result_str + ',' + f'{lst[j[0]]}-{lst[j[1]]}'

    return result_str[1:]

result = solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])

print(result)

print('---------------------SECOND SOLUTION------------------------')

def solution2(lst):
    result = ''
    start = end = lst[0]

    for num in lst[1:] + ['']:
        if num != end + 1:
            if abs(abs(start)-abs(end)) >= 2:
                result += f'{start}-{end},' 
            elif abs(abs(start)-abs(end)) == 1:
                result += f'{start},{end},'
            else:
                result += f'{start},'
            start = num
        end = num
    
    return result[:-1]

result2 = solution2([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
print(result2)
