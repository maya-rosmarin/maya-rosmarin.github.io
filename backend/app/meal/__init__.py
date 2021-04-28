class Meal(object):
    def __init__(self, adapter=None):
        self.client = adapter()

    def find_all(self, selector):
        return self.client.find_all(selector)

    def find(self, selector):
        return self.client.find(selector)

    def create(self, meal):
        return self.client.create(meal)

    def update(self, selector, meal):
        return self.client.update(selector, meal)

    def delete(self, selector):
        return self.client.delete(selector)


class Course(object):
    def __init__(self, meal, adapter=None):
        self.meal = meal
        self.client = adapter()

    def find_all(self, selector):
        return self.client.find_all(selector)

    def find(self, selector):
        return self.client.find(selector)

    def create(self, course):
        return self.client.create(course)

    def update(self, selector, course):
        return self.client.update(selector, course)

    def delete(self, selector):
        return self.client.delete(selector)
