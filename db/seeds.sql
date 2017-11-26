-- Table: Categories
insert into categories(name) VALUES('Chicken');
insert into categories(name) VALUES('Beef');
insert into categories(name) VALUES('Fish');
insert into categories(name) VALUES('Pizza');


-- Recipe #1
insert into recipes(name)
VALUES('BBQ Chicken Pizza');

insert into ingredients(name, RecipeId)
VALUES('2 tablespoons of olive oil', 1);

insert into ingredients(name, RecipeId)
VALUES('1/2 pound of chicken tenders', 1);

insert into directions(stepNum, stepDirection, RecipeId)
VALUES(1, 'Preheat oven to 400 degrees F.', 1);

insert into directions(stepNum, stepDirection, RecipeId)
VALUES(2, 'Heat oil in a large skillet over medium-high heat. Add chicken tenders and saute until golden brown, about 12 minutes. Remove from heat. When chicken is cool enough to handle, dice chicken to yield a little over 1 cup. In a small bowl, toss chicken with 2 tablespoons barbecue sauce. Set aside.',
 1);

insert into directions(stepNum, stepDirection, RecipeId)
VALUES(3, 'This is Step 3 ...test text', 1);

-- Recipe #2
insert into recipes(name)
VALUES('Caesar Chicken Salad');

insert into RecipeCategories(createdAt, updatedAt, CategoryId, RecipeId)
VALUES  (NOW(), NOW(), 1, 2),
        (NOW(), NOW(), 1, 1),
        (NOW(), NOW(), 4, 1);


insert into ingredients(name, RecipeId)
VALUES('2 ounces of canned flat anchovy filets', 2);

insert into directions(stepNum, stepDirection, RecipeId)
VALUES(1, 'Recipe2 Step1 ...test text', 2);
