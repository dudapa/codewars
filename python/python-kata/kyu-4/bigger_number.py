"""Next Bigger Number With The Same Digits

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
 """

def next_bigger(n):
    numbers = [int(i) for i in str(n)] # Convert number to string

    left = None
    right = None

    for i in range(len(numbers)-2, -1, -1):
      if numbers[i] < numbers[i+1]:
        left = i
        break
    else:
      return -1


    for j in range(len(numbers) -1, -1, -1):
      if numbers[j] > numbers[left]:
        right = j
        break

    numbers[left], numbers[right] = numbers[right], numbers[left]

    numbers = numbers[:left+1] + sorted(numbers[left+1:])

    return int(''.join([str(num) for num in numbers]))

n = 513
result = next_bigger(n)
print(result)
