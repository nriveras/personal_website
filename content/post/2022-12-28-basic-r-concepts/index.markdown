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
---

## What is R?

R is a free software environment for statistical computing and graphics. The most basic use of R is as a simple calculator, doing arithmetic operations.


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

### Basic data types in R

R works with numerous data types. Some of the most basic types to get started are:

+   Decimal values like 4.5 are called numerics.
+   Whole numbers like 4 are called integers. Integers are also numerics.
+   Boolean values (TRUE or FALSE) are called logical.
+   Text (or string) values are called characters.

Note how the quotation marks in the editor indicate that "some text" is a string.


### Vector

### Matrices

### Factors

### Data frames

### Lists

Nevertheless, R is much more powerful than that, and most of this power relies on the community who already developed [18976 packages](https://cran.r-project.org/web/packages/available_packages_by_name.html) extending the functions of R.
