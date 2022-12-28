---
title: Basic R concepts
author: 'Nicolás Riveras Muñoz'
date: '2022-12-28'
slug: basic-r-concepts
categories: []
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2022-12-28T12:06:46+01:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
share: false
---

## What is R?

R is a free software environment for statistical computing and graphics that I've been intensively using in the last years. The most basic use of R is as a simple calculator, doing arithmetic operations.


```r
1+15
```

```
## [1] 16
```
### Variables

As most of programming languages, you can create variables. Imaging variables as boxes where you can store any kind of R-thing. You can assign content to a variable trough the `<-` operator or `=` (both work, just be consistent when you write your code).
Rules for R variables are:

+   A variable name must start with a letter and can be a combination of letters, digits, period(.)
and underscore(_). If it starts with period(.), it cannot be followed by a digit.
+   A variable name cannot start with a number or underscore (_)
+   Variable names are case-sensitive (age, Age and AGE are three different variables)
+   Reserved words cannot be used as variables (TRUE, FALSE, NULL, if...)



```r
# Legal variable names:
myvar <- "John"
my_var <- "John"
myVar <- "John"
MYVAR <- "John"
myvar2 <- "John"
.myvar <- "John"

# Illegal variable names:
2myvar <- "John"
my-var <- "John"
my var <- "John"
_my_var <- "John"
my_v@ar <- "John"
TRUE <- "John"
```

If we want to know which variables are in our workspace, we can use `ls()`.

## Basic data types in R

R works with numerous data types. Some of the most basic types are:

+   Decimal values like 4.5 are called numeric.
+   Whole numbers like 4 are called integers. Integers are also numeric.
+   Boolean values (TRUE or FALSE) are called logical.
+   Text (or string) values are called characters.

Note how the quotation marks in the editor indicate that `"some text"` is a string.

## Data structures in R

R incorporate several ways to organize data in more complex structures:

### Vector

Vector is a basic data structure in R. It contains element of the same type. The data types can be logical, integer, double, character, complex or raw.
Vectors are generally created using the `c()` function.
Since, a vector must have elements of the same type, this function will try and coerce elements to the same type, if they are different.
Coercion is from lower to higher types from logical to integer to double to character.


```r
x <- c(1, 5.4, TRUE, "hello")
x
```

```
## [1] "1"     "5.4"   "TRUE"  "hello"
```

```r
typeof(x)
```

```
## [1] "character"
```

### Matrices

Matrices are the R objects in which the elements are arranged in a two-dimensional rectangular layout. They contain elements of the same atomic types. Though we can create a matrix containing only characters or only logical values, they are not of much use. We use matrices containing numeric elements to be used in mathematical calculations.

A Matrix is created using the `matrix()` function.

##### Syntax
The basic syntax for creating a matrix in R is −


```r
matrix(data, nrow, ncol, byrow, dimnames)
```
Following is the description of the parameters used −

+   **data** is the input vector which becomes the data elements of the matrix.
+   **nrow** is the number of rows to be created.
+   **ncol** is the number of columns to be created.
+   **byrow** is a logical clue. If TRUE then the input vector elements are arranged by row.
+   **dimname** is the names assigned to the rows and columns.

### Factors

Factors are the data objects which are used to categorize the data and store it as levels. They can store both strings and integers. They are useful in the columns which have a limited number of unique values. Like "Male, "Female" and True, False etc. They are useful in data analysis for statistical modeling.

Factors are created using the `factor()` function by taking a vector as input.


```r
# Create a vector as input.
data <- factor(c("East","West","East","North","North","East","West","West","West","East","North"))

print(data)
```

```
##  [1] East  West  East  North North East  West  West  West  East  North
## Levels: East North West
```

```r
print(is.factor(data))
```

```
## [1] TRUE
```

### Data frames

A data frame is a table or a two-dimensional array-like structure in which each column contains values of one variable and each row contains one set of values from each column.

Following are the characteristics of a data frame.

+   The column names should be non-empty.
+   The row names should be unique.
+   The data stored in a data frame can be of numeric, factor or character type.
+   Each column should contain same number of data items.


```r
# Create the data frame.
emp.data <- data.frame(
   emp_id = c (1:5), 
   emp_name = c("Rick","Dan","Michelle","Ryan","Gary"),
   salary = c(623.3,515.2,611.0,729.0,843.25), 
   
   start_date = as.Date(c("2012-01-01", "2013-09-23", "2014-11-15", "2014-05-11",
      "2015-03-27")),
   stringsAsFactors = FALSE
)
# Print the data frame.			
print(emp.data) 
```

```
##   emp_id emp_name salary start_date
## 1      1     Rick 623.30 2012-01-01
## 2      2      Dan 515.20 2013-09-23
## 3      3 Michelle 611.00 2014-11-15
## 4      4     Ryan 729.00 2014-05-11
## 5      5     Gary 843.25 2015-03-27
```

### Lists

Lists are the R objects which contain elements of different types like − numbers, strings, vectors and another list inside it. A list can also contain a matrix or a function as its elements. List is created using `list()` function.


```r
# Create a list containing strings, numbers, vectors and a logical
# values.
list_data <- list("Red", "Green", c(21,32,11), TRUE, 51.23, 119.1)
print(list_data)
```

```
## [[1]]
## [1] "Red"
## 
## [[2]]
## [1] "Green"
## 
## [[3]]
## [1] 21 32 11
## 
## [[4]]
## [1] TRUE
## 
## [[5]]
## [1] 51.23
## 
## [[6]]
## [1] 119.1
```
---

Nevertheless, R is much more powerful than that, and most of this power relies on the community who already developed [18976 packages](https://cran.r-project.org/web/packages/available_packages_by_name.html) extending the functions of R.

---

Most of this content is based on [R for Data Science](https://r4ds.hadley.nz/) and [R Cookboock](https://rc2e.com/).
