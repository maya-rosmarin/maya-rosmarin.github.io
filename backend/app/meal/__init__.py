class Repository(object):
    def __init__(self):
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