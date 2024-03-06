""" You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

Be careful about your timing! """


# First I write function to find prime number
numbers = list(range(0, 30))

def is_prime_number(num:int) -> bool:
    if 2 > num:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True
        

def find_prime_number(numbers:list) ->list:
    prime_numbers = []
    not_prime_numbers = []
    for num in numbers: 
        is_prime = is_prime_number(num)
        if is_prime:
            prime_numbers.append(num)
        else: 
            not_prime_numbers.append(num)
    return prime_numbers, not_prime_numbers


prime_numbers, not_prime_numbers = find_prime_number(numbers)

def not_primes(self):
    pass
