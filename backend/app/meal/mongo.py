import os
from pymongo import MongoClient

COLLECTION_NAME = 'meals'


class MongoMeal(object):
    def __init__(self):
        mongo_url = os.environ.get('MONGO_URL')
        self.db = MongoClient(mongo_url).meals

    def find_all(self, selector):
        return self.db.meals.find(selector)

    def find(self, selector):
        return self.db.meals.find_one(selector)

    def create(self, meal):
        return self.db.meals.insert_one(meal)

    def update(self, selector, meal):
        return self.db.meals.replace_one(selector, meal).modified_count

    def delete(self, selector):
        return self.db.meals.delete_one(selector).deleted_count
