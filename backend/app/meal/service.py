from ..meal import Meal
from ..meal.mongo import MongoMeal
from ..schema.schema import MealSchema


class Service(object):
    def __init__(self, meal_client=Meal(adapter=MongoMeal)):
        self.meal_client = meal_client

    def find_all_meals(self):
        meals = self.meal_client.find_all()
        return [self.dump(meal) for meal in meals]

    def find_meal(self, meal_id):
        meal = self.meal_client.find({'id': meal_id})
        return self.dump(meal)

    def create_course_for(self, course, meal):
        self.meal_client.create(self.create_course(course, meal))
        return self.dump(course)

    def update_course_with(self, meal_id, meal):
        records_affected = self.meal_client.update({})


    def create_course(self, course, meal):
        meal_id = meal.id
        course['meal_id'] = meal_id
        return course
