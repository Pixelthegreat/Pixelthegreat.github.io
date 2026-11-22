# Evolution of a Map
_by Elliot Kohlmyer, November 22nd, 2026_

&emsp;Often times we have the perfect idea for a project. However, over time, we begin to lose confidence as we think about the things we could've done better. Perhaps a better angle to look at it is this: We never stop learning until we stop altogether. Each time we make something, we hold the experience from the last time and use it to our advantage. A mistake that we made then can be fixed now. A questionable implementation choice made then can be rectified now. Programming is made up of lots of little journeys like this, and I would like to talk about one of mine today.

&emsp;Spefically: Maps. A map is a data structure that pairs keys and values together, with the keys acting as indices. The keys are _mapped_ to the values. It's a very handy data structure for a variety of projects, and you might see them referred to by other names such as hash maps, dictionaries and tables. Seeing as I write a lot of projects in C, I've had to implement the humble map many times over, and I've learned a lot about how to implement them right. Here, I will talk about varying levels of implementations, starting from a naive approach and ending with a fast and efficient one.

## Level One: Lists
&emsp;If you're not going for anything fancy, the simplest way to implement a map is to have two dynamic lists: One for the keys and one for the values. That's it. You can pretty much do this in any language with growable lists, and it's quite easy to make. Here's a simple version of it in Python:
```python
class Map:
    def __init__(self);
        self.keys = []
        self.values = []

    def get(self, key):
        return self.values[self.keys.index(key)]

    def set(self, key, value):
        try:
            self.values[self.keys.index(key)] = value
        except ValueError:
            self.keys.append(key)
            self.values.append(value)
```

## Level Two: One List
&emsp;You can take the previous approach a step further and unify the keys and the values into one list. You can have the list store a structure with a key and a value, or you can have every first item be a key and every second item be a value.

&emsp;If you wish to go for either of level one or level two, I would recommend this one as it is friendlier on memory allocation.<sup>1</sup>

<span id="1" class="note">This is a note! This is a note!</span>

## Level Three: Links
