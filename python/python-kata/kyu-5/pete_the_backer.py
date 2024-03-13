""" Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

# must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
# must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})
 """


def cakes(recipe, available):
    
    recipe_first_key = list(recipe.keys())[0]
    if not available.get(recipe_first_key):
        return 0

    min_value = available[recipe_first_key] // recipe[recipe_first_key]

    for key in recipe:
        if not available.get(key):
            return 0
        elif available[key] // recipe[key] < min_value:
            min_value = available[key] // recipe[key]
    
    return min_value


recipe = {'apples': 3, 'flour': 300, 'sugar': 150, 'milk': 100, 'oil': 100}

available = {'sugar': 500, 'flour': 2000, 'milk': 2000}


result = cakes(recipe, available)

print('result: ', result)


# Solution with list comprehension ( nice silution :) ) 
def cakes2(recipe, available):
    return min([available.get(key, 0) // recipe[key] for key in recipe])


result2 = cakes2(recipe, available)
print('result2: ', result2)
