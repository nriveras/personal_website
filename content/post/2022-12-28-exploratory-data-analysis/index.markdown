---
title: Exploratory data analysis
author: 'Nicolás Riveras Muñoz'
date: '2022-12-28'
slug: exploratory-data-analysis
categories: []
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2022-12-28T16:52:01+01:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
share: false
---
<script src="{{< blogdown/postref >}}index_files/kePrint/kePrint.js"></script>
<link href="{{< blogdown/postref >}}index_files/lightable/lightable.css" rel="stylesheet" />


In this chapter, we will see how to explore data to:

+   Generate questions about your data.
+   search for answers by visualizing, *transforming* and modeling your data.
+   Use what you learn to refine your questions and/or generate new questions.

This is not a formal process and you should feel free to investigate every idea that occurs to you.
With the exploratory data analysis we can now the quality of our data, it it meet or not our expectations, if it is necessary to clean, transform, etc.

## Basic data management

### Setting up a working directory (working directory)

As with most of the projects, we start choosing a working directory to indicate R where are our files.


```r
getwd()                       # Current working directory 
setwd("C:/GEO77_R_course") 	  # Set a working directory
setwd("C:\\GEO77_R_course")   # another valid way to select the same working directory
setwd("C:\GEO77_R_course")    # an invalid way of selecting the same working directory
```

#### And if I do not want to write code?

![](images/set_directory.png)

-   or go to Session/Set Working Directory/Choose directory... and select folder

-   or press `Ctrl+⇧Shift+H` and select folder

**Why?** 

+   Clarity 
+   Simplification of data management 
+   Facilitates access to our data

### Loading data

R has the ability to load multiple file formats, which can be further extended through packages.

Reading a dataset `read.table()`





```r
# relative file location
file_location <- "C:/GEO77_R_course/data/soil_data.txt"
# absolute file location
file_location <- "./soil_data.txt"
```


```r
soil_data <- read.table(file_location, header = TRUE)
```

```r
names(soil_data)
```

```
##  [1] "OBJECTID" "x"        "y"        "coarse"   "clay"     "silt"    
##  [7] "sand"     "pH"       "OC"       "N"        "P"        "K"       
## [13] "CEC"      "pH_class"
```
<style type="text/css">
.scroll-200 {
max-height: 200px;
overflow-y: auto;
background-color: inherit;
}
</style>

```r
str(soil_data)
```

```{.scroll-200}
## 'data.frame':	346 obs. of  14 variables:
##  $ OBJECTID: int  1 2 3 4 5 6 7 8 9 10 ...
##  $ x       : num  789504 773300 773621 766972 765574 ...
##  $ y       : num  5318238 5334066 5308045 5360016 5311956 ...
##  $ coarse  : int  12 8 14 13 12 5 50 5 35 9 ...
##  $ clay    : int  21 23 22 17 18 17 22 19 21 33 ...
##  $ silt    : int  41 72 58 54 56 74 39 63 69 60 ...
##  $ sand    : int  38 5 20 28 27 9 39 18 10 7 ...
##  $ pH      : num  6.32 5.56 5.1 7.34 6.12 6.6 7.2 7.39 7.02 6.24 ...
##  $ OC      : num  17.8 18 27.7 12.5 31.5 ...
##  $ N       : num  1.8 1.8 2.5 1.4 3.2 ...
##  $ P       : num  20.1 60.6 15 27.6 24.1 55.6 49.3 84.2 76.6 54.4 ...
##  $ K       : num  126.8 234.3 70.1 17.6 68.1 ...
##  $ CEC     : num  12.6 10.4 8.3 12.7 18.7 12.9 36 16.5 22.5 27.5 ...
##  $ pH_class: chr  "acidic" "acidic" "acidic" "neutral" ...
```
<div style="border: 1px solid #ddd; padding: 0px; overflow-y: scroll; height:200px; overflow-x: scroll; width:100%; "><table class=" lightable-classic" style="font-family: Cambria; margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> OBJECTID </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> x </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> y </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> coarse </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> clay </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> silt </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> sand </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> pH </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> OC </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> N </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> P </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> K </th>
   <th style="text-align:right;position: sticky; top:0; background-color: #FFFFFF;"> CEC </th>
   <th style="text-align:left;position: sticky; top:0; background-color: #FFFFFF;"> pH_class </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:right;"> 1 </td>
   <td style="text-align:right;"> 789503.5 </td>
   <td style="text-align:right;"> 5318238 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 6.32 </td>
   <td style="text-align:right;"> 17.8 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 20.1 </td>
   <td style="text-align:right;"> 126.8 </td>
   <td style="text-align:right;"> 12.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 773299.8 </td>
   <td style="text-align:right;"> 5334066 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 72 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 5.56 </td>
   <td style="text-align:right;"> 18.0 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 60.6 </td>
   <td style="text-align:right;"> 234.3 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 773620.8 </td>
   <td style="text-align:right;"> 5308045 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 5.10 </td>
   <td style="text-align:right;"> 27.7 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 15.0 </td>
   <td style="text-align:right;"> 70.1 </td>
   <td style="text-align:right;"> 8.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 766972.2 </td>
   <td style="text-align:right;"> 5360016 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 7.34 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 27.6 </td>
   <td style="text-align:right;"> 17.6 </td>
   <td style="text-align:right;"> 12.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 765574.1 </td>
   <td style="text-align:right;"> 5311956 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 6.12 </td>
   <td style="text-align:right;"> 31.5 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 24.1 </td>
   <td style="text-align:right;"> 68.1 </td>
   <td style="text-align:right;"> 18.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 763222.3 </td>
   <td style="text-align:right;"> 5339957 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 6.60 </td>
   <td style="text-align:right;"> 12.4 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 55.6 </td>
   <td style="text-align:right;"> 123.9 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 763674.4 </td>
   <td style="text-align:right;"> 5303926 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 7.20 </td>
   <td style="text-align:right;"> 103.3 </td>
   <td style="text-align:right;"> 7.7 </td>
   <td style="text-align:right;"> 49.3 </td>
   <td style="text-align:right;"> 111.9 </td>
   <td style="text-align:right;"> 36.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 759071.3 </td>
   <td style="text-align:right;"> 5351917 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 7.39 </td>
   <td style="text-align:right;"> 17.0 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 84.2 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 16.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 759246.5 </td>
   <td style="text-align:right;"> 5337908 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 7.02 </td>
   <td style="text-align:right;"> 36.1 </td>
   <td style="text-align:right;"> 3.8 </td>
   <td style="text-align:right;"> 76.6 </td>
   <td style="text-align:right;"> 74.0 </td>
   <td style="text-align:right;"> 22.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 759699.9 </td>
   <td style="text-align:right;"> 5301880 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 6.24 </td>
   <td style="text-align:right;"> 72.8 </td>
   <td style="text-align:right;"> 6.7 </td>
   <td style="text-align:right;"> 54.4 </td>
   <td style="text-align:right;"> 764.4 </td>
   <td style="text-align:right;"> 27.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 756896.7 </td>
   <td style="text-align:right;"> 5365899 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 6.15 </td>
   <td style="text-align:right;"> 19.1 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 68.1 </td>
   <td style="text-align:right;"> 241.7 </td>
   <td style="text-align:right;"> 10.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 754942.4 </td>
   <td style="text-align:right;"> 5361877 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 6.72 </td>
   <td style="text-align:right;"> 15.2 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 74.6 </td>
   <td style="text-align:right;"> 139.7 </td>
   <td style="text-align:right;"> 15.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 753585.4 </td>
   <td style="text-align:right;"> 5311848 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 7.54 </td>
   <td style="text-align:right;"> 30.7 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 72.7 </td>
   <td style="text-align:right;"> 107.9 </td>
   <td style="text-align:right;"> 21.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 749375.0 </td>
   <td style="text-align:right;"> 5327783 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 5.44 </td>
   <td style="text-align:right;"> 17.4 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 44.7 </td>
   <td style="text-align:right;"> 96.5 </td>
   <td style="text-align:right;"> 7.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 747123.7 </td>
   <td style="text-align:right;"> 5347773 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 7.29 </td>
   <td style="text-align:right;"> 20.2 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 19.6 </td>
   <td style="text-align:right;"> 94.9 </td>
   <td style="text-align:right;"> 16.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 745452.8 </td>
   <td style="text-align:right;"> 5321736 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 6.89 </td>
   <td style="text-align:right;"> 57.1 </td>
   <td style="text-align:right;"> 5.4 </td>
   <td style="text-align:right;"> 17.9 </td>
   <td style="text-align:right;"> 87.9 </td>
   <td style="text-align:right;"> 31.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 741023.2 </td>
   <td style="text-align:right;"> 5355707 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 7.32 </td>
   <td style="text-align:right;"> 50.4 </td>
   <td style="text-align:right;"> 5.4 </td>
   <td style="text-align:right;"> 86.0 </td>
   <td style="text-align:right;"> 657.7 </td>
   <td style="text-align:right;"> 33.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 741425.8 </td>
   <td style="text-align:right;"> 5323691 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 7.43 </td>
   <td style="text-align:right;"> 11.1 </td>
   <td style="text-align:right;"> 1.2 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 132.1 </td>
   <td style="text-align:right;"> 9.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 737249.5 </td>
   <td style="text-align:right;"> 5337649 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 7.26 </td>
   <td style="text-align:right;"> 30.2 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:right;"> 64.6 </td>
   <td style="text-align:right;"> 210.0 </td>
   <td style="text-align:right;"> 30.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 737530.0 </td>
   <td style="text-align:right;"> 5315635 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 7.03 </td>
   <td style="text-align:right;"> 38.0 </td>
   <td style="text-align:right;"> 3.7 </td>
   <td style="text-align:right;"> 35.2 </td>
   <td style="text-align:right;"> 191.7 </td>
   <td style="text-align:right;"> 20.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 735121.1 </td>
   <td style="text-align:right;"> 5347621 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 3.81 </td>
   <td style="text-align:right;"> 49.5 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 24.2 </td>
   <td style="text-align:right;"> 45.1 </td>
   <td style="text-align:right;"> 10.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 735350.4 </td>
   <td style="text-align:right;"> 5329623 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 6.85 </td>
   <td style="text-align:right;"> 40.4 </td>
   <td style="text-align:right;"> 4.7 </td>
   <td style="text-align:right;"> 86.6 </td>
   <td style="text-align:right;"> 187.4 </td>
   <td style="text-align:right;"> 19.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 733300.3 </td>
   <td style="text-align:right;"> 5333599 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 65 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 7.61 </td>
   <td style="text-align:right;"> 30.5 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 48.2 </td>
   <td style="text-align:right;"> 145.2 </td>
   <td style="text-align:right;"> 17.8 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 733754.7 </td>
   <td style="text-align:right;"> 5297578 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:right;"> 7.24 </td>
   <td style="text-align:right;"> 32.2 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 10.6 </td>
   <td style="text-align:right;"> 35.0 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 728897.7 </td>
   <td style="text-align:right;"> 5365571 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 6.80 </td>
   <td style="text-align:right;"> 15.8 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 42.1 </td>
   <td style="text-align:right;"> 106.4 </td>
   <td style="text-align:right;"> 16.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 729505.9 </td>
   <td style="text-align:right;"> 5317542 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 6.19 </td>
   <td style="text-align:right;"> 83.7 </td>
   <td style="text-align:right;"> 8.5 </td>
   <td style="text-align:right;"> 33.6 </td>
   <td style="text-align:right;"> 106.9 </td>
   <td style="text-align:right;"> 35.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 729805.0 </td>
   <td style="text-align:right;"> 5293528 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 6.39 </td>
   <td style="text-align:right;"> 41.1 </td>
   <td style="text-align:right;"> 4.0 </td>
   <td style="text-align:right;"> 15.5 </td>
   <td style="text-align:right;"> 116.8 </td>
   <td style="text-align:right;"> 24.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 725505.1 </td>
   <td style="text-align:right;"> 5317497 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 6.87 </td>
   <td style="text-align:right;"> 197.3 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:right;"> 42.9 </td>
   <td style="text-align:right;"> 102.4 </td>
   <td style="text-align:right;"> 73.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 723759.1 </td>
   <td style="text-align:right;"> 5297460 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 7.13 </td>
   <td style="text-align:right;"> 68.9 </td>
   <td style="text-align:right;"> 6.6 </td>
   <td style="text-align:right;"> 65.1 </td>
   <td style="text-align:right;"> 125.3 </td>
   <td style="text-align:right;"> 40.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 719027.6 </td>
   <td style="text-align:right;"> 5355448 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 73 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 7.51 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 71.2 </td>
   <td style="text-align:right;"> 187.5 </td>
   <td style="text-align:right;"> 12.2 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 719633.5 </td>
   <td style="text-align:right;"> 5307419 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 6.16 </td>
   <td style="text-align:right;"> 33.5 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 23.7 </td>
   <td style="text-align:right;"> 162.4 </td>
   <td style="text-align:right;"> 24.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 714798.8 </td>
   <td style="text-align:right;"> 5373406 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 7.44 </td>
   <td style="text-align:right;"> 12.3 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 59.3 </td>
   <td style="text-align:right;"> 313.3 </td>
   <td style="text-align:right;"> 17.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 713154.9 </td>
   <td style="text-align:right;"> 5345368 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 6.46 </td>
   <td style="text-align:right;"> 21.0 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 40.0 </td>
   <td style="text-align:right;"> 79.6 </td>
   <td style="text-align:right;"> 18.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 707370.6 </td>
   <td style="text-align:right;"> 5335263 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 7.84 </td>
   <td style="text-align:right;"> 28.3 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 73.6 </td>
   <td style="text-align:right;"> 324.7 </td>
   <td style="text-align:right;"> 24.1 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 704857.7 </td>
   <td style="text-align:right;"> 5369280 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 7.52 </td>
   <td style="text-align:right;"> 33.8 </td>
   <td style="text-align:right;"> 3.4 </td>
   <td style="text-align:right;"> 79.2 </td>
   <td style="text-align:right;"> 88.8 </td>
   <td style="text-align:right;"> 27.5 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 705765.8 </td>
   <td style="text-align:right;"> 5297246 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 5.23 </td>
   <td style="text-align:right;"> 45.7 </td>
   <td style="text-align:right;"> 4.3 </td>
   <td style="text-align:right;"> 41.1 </td>
   <td style="text-align:right;"> 116.6 </td>
   <td style="text-align:right;"> 13.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 700340.3 </td>
   <td style="text-align:right;"> 5409247 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 8.14 </td>
   <td style="text-align:right;"> 38.2 </td>
   <td style="text-align:right;"> 2.6 </td>
   <td style="text-align:right;"> 21.0 </td>
   <td style="text-align:right;"> 104.5 </td>
   <td style="text-align:right;"> 24.4 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 700623.5 </td>
   <td style="text-align:right;"> 5387240 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 6.77 </td>
   <td style="text-align:right;"> 17.9 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 53.2 </td>
   <td style="text-align:right;"> 337.7 </td>
   <td style="text-align:right;"> 14.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 700957.7 </td>
   <td style="text-align:right;"> 5361230 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 7.65 </td>
   <td style="text-align:right;"> 63.4 </td>
   <td style="text-align:right;"> 5.7 </td>
   <td style="text-align:right;"> 15.5 </td>
   <td style="text-align:right;"> 92.9 </td>
   <td style="text-align:right;"> 55.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 701084.6 </td>
   <td style="text-align:right;"> 5351227 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 7.58 </td>
   <td style="text-align:right;"> 68.1 </td>
   <td style="text-align:right;"> 5.5 </td>
   <td style="text-align:right;"> 51.1 </td>
   <td style="text-align:right;"> 117.0 </td>
   <td style="text-align:right;"> 50.9 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 694472.1 </td>
   <td style="text-align:right;"> 5399168 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 84 </td>
   <td style="text-align:right;"> 5.58 </td>
   <td style="text-align:right;"> 6.2 </td>
   <td style="text-align:right;"> 0.7 </td>
   <td style="text-align:right;"> 73.9 </td>
   <td style="text-align:right;"> 100.5 </td>
   <td style="text-align:right;"> 3.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 694933.8 </td>
   <td style="text-align:right;"> 5363158 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 6.24 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 35.0 </td>
   <td style="text-align:right;"> 176.8 </td>
   <td style="text-align:right;"> 6.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 692830.7 </td>
   <td style="text-align:right;"> 5371134 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 6.61 </td>
   <td style="text-align:right;"> 15.0 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 59.1 </td>
   <td style="text-align:right;"> 190.7 </td>
   <td style="text-align:right;"> 8.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 690239.9 </td>
   <td style="text-align:right;"> 5417126 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 7.69 </td>
   <td style="text-align:right;"> 18.2 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 24.1 </td>
   <td style="text-align:right;"> 119.6 </td>
   <td style="text-align:right;"> 20.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 690317.1 </td>
   <td style="text-align:right;"> 5411119 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 7.95 </td>
   <td style="text-align:right;"> 20.1 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 62.3 </td>
   <td style="text-align:right;"> 20.5 </td>
   <td style="text-align:right;"> 20.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 690703.2 </td>
   <td style="text-align:right;"> 5381116 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 7.06 </td>
   <td style="text-align:right;"> 14.9 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 92.2 </td>
   <td style="text-align:right;"> 235.4 </td>
   <td style="text-align:right;"> 15.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 691163.3 </td>
   <td style="text-align:right;"> 5345102 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 7.56 </td>
   <td style="text-align:right;"> 37.7 </td>
   <td style="text-align:right;"> 3.7 </td>
   <td style="text-align:right;"> 37.8 </td>
   <td style="text-align:right;"> 366.6 </td>
   <td style="text-align:right;"> 25.1 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 686111.6 </td>
   <td style="text-align:right;"> 5427077 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 7.01 </td>
   <td style="text-align:right;"> 16.9 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 90.9 </td>
   <td style="text-align:right;"> 387.1 </td>
   <td style="text-align:right;"> 15.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 686577.7 </td>
   <td style="text-align:right;"> 5391068 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 6.84 </td>
   <td style="text-align:right;"> 28.2 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 10.7 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 20.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 687674.8 </td>
   <td style="text-align:right;"> 5305036 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 6.96 </td>
   <td style="text-align:right;"> 54.4 </td>
   <td style="text-align:right;"> 5.6 </td>
   <td style="text-align:right;"> 33.1 </td>
   <td style="text-align:right;"> 218.5 </td>
   <td style="text-align:right;"> 34.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 685600.6 </td>
   <td style="text-align:right;"> 5311015 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 7.31 </td>
   <td style="text-align:right;"> 38.7 </td>
   <td style="text-align:right;"> 3.8 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:right;"> 122.6 </td>
   <td style="text-align:right;"> 31.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 680372.4 </td>
   <td style="text-align:right;"> 5406996 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 6.33 </td>
   <td style="text-align:right;"> 12.3 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 52.0 </td>
   <td style="text-align:right;"> 184.0 </td>
   <td style="text-align:right;"> 8.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 680449.6 </td>
   <td style="text-align:right;"> 5400997 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 7.66 </td>
   <td style="text-align:right;"> 35.3 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 47.8 </td>
   <td style="text-align:right;"> 291.5 </td>
   <td style="text-align:right;"> 20.5 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 680604.4 </td>
   <td style="text-align:right;"> 5388992 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 80 </td>
   <td style="text-align:right;"> 7.56 </td>
   <td style="text-align:right;"> 32.8 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 13.3 </td>
   <td style="text-align:right;"> 135.2 </td>
   <td style="text-align:right;"> 18.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:right;"> 680683.4 </td>
   <td style="text-align:right;"> 5382991 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 6.25 </td>
   <td style="text-align:right;"> 8.9 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 35.0 </td>
   <td style="text-align:right;"> 199.1 </td>
   <td style="text-align:right;"> 5.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 680914.2 </td>
   <td style="text-align:right;"> 5364990 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 5.72 </td>
   <td style="text-align:right;"> 11.6 </td>
   <td style="text-align:right;"> 1.2 </td>
   <td style="text-align:right;"> 40.1 </td>
   <td style="text-align:right;"> 146.4 </td>
   <td style="text-align:right;"> 9.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:right;"> 681066.5 </td>
   <td style="text-align:right;"> 5352983 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 6.44 </td>
   <td style="text-align:right;"> 28.4 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:right;"> 23.9 </td>
   <td style="text-align:right;"> 115.1 </td>
   <td style="text-align:right;"> 26.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 676710.0 </td>
   <td style="text-align:right;"> 5380941 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 5.54 </td>
   <td style="text-align:right;"> 13.4 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 31.9 </td>
   <td style="text-align:right;"> 120.7 </td>
   <td style="text-align:right;"> 8.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 676996.0 </td>
   <td style="text-align:right;"> 5358943 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 7.46 </td>
   <td style="text-align:right;"> 16.2 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 84.5 </td>
   <td style="text-align:right;"> 121.5 </td>
   <td style="text-align:right;"> 14.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 672246.2 </td>
   <td style="text-align:right;"> 5416900 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 7.89 </td>
   <td style="text-align:right;"> 32.3 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 98.2 </td>
   <td style="text-align:right;"> 425.6 </td>
   <td style="text-align:right;"> 23.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 672323.6 </td>
   <td style="text-align:right;"> 5410899 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 7.16 </td>
   <td style="text-align:right;"> 13.0 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 53.4 </td>
   <td style="text-align:right;"> 399.8 </td>
   <td style="text-align:right;"> 10.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:right;"> 673351.6 </td>
   <td style="text-align:right;"> 5330876 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 65 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 6.69 </td>
   <td style="text-align:right;"> 13.2 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 67.4 </td>
   <td style="text-align:right;"> 128.0 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 673875.4 </td>
   <td style="text-align:right;"> 5290858 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 7.40 </td>
   <td style="text-align:right;"> 44.2 </td>
   <td style="text-align:right;"> 4.2 </td>
   <td style="text-align:right;"> 13.4 </td>
   <td style="text-align:right;"> 168.4 </td>
   <td style="text-align:right;"> 36.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 669043.9 </td>
   <td style="text-align:right;"> 5354836 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 6.75 </td>
   <td style="text-align:right;"> 13.1 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 94.6 </td>
   <td style="text-align:right;"> 262.2 </td>
   <td style="text-align:right;"> 12.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 65 </td>
   <td style="text-align:right;"> 669097.6 </td>
   <td style="text-align:right;"> 5350835 </td>
   <td style="text-align:right;"> 0 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 6.02 </td>
   <td style="text-align:right;"> 47.3 </td>
   <td style="text-align:right;"> 4.1 </td>
   <td style="text-align:right;"> 40.0 </td>
   <td style="text-align:right;"> 102.3 </td>
   <td style="text-align:right;"> 21.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 66 </td>
   <td style="text-align:right;"> 664505.2 </td>
   <td style="text-align:right;"> 5396794 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:right;"> 7.33 </td>
   <td style="text-align:right;"> 29.1 </td>
   <td style="text-align:right;"> 2.3 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 264.5 </td>
   <td style="text-align:right;"> 17.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 67 </td>
   <td style="text-align:right;"> 664637.5 </td>
   <td style="text-align:right;"> 5386795 </td>
   <td style="text-align:right;"> 1 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 82 </td>
   <td style="text-align:right;"> 5.97 </td>
   <td style="text-align:right;"> 73.8 </td>
   <td style="text-align:right;"> 5.8 </td>
   <td style="text-align:right;"> 23.7 </td>
   <td style="text-align:right;"> 373.3 </td>
   <td style="text-align:right;"> 29.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 665892.2 </td>
   <td style="text-align:right;"> 5288761 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 6.84 </td>
   <td style="text-align:right;"> 37.3 </td>
   <td style="text-align:right;"> 3.4 </td>
   <td style="text-align:right;"> 20.0 </td>
   <td style="text-align:right;"> 193.5 </td>
   <td style="text-align:right;"> 27.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 664070.1 </td>
   <td style="text-align:right;"> 5274732 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 1 </td>
   <td style="text-align:right;"> 6.69 </td>
   <td style="text-align:right;"> 113.5 </td>
   <td style="text-align:right;"> 9.8 </td>
   <td style="text-align:right;"> 11.3 </td>
   <td style="text-align:right;"> 192.6 </td>
   <td style="text-align:right;"> 63.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 70 </td>
   <td style="text-align:right;"> 658251.4 </td>
   <td style="text-align:right;"> 5416723 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 7.69 </td>
   <td style="text-align:right;"> 32.8 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 77.0 </td>
   <td style="text-align:right;"> 467.0 </td>
   <td style="text-align:right;"> 27.9 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 71 </td>
   <td style="text-align:right;"> 657845.6 </td>
   <td style="text-align:right;"> 5292668 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 6.80 </td>
   <td style="text-align:right;"> 123.8 </td>
   <td style="text-align:right;"> 8.6 </td>
   <td style="text-align:right;"> 17.4 </td>
   <td style="text-align:right;"> 156.6 </td>
   <td style="text-align:right;"> 64.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 72 </td>
   <td style="text-align:right;"> 654331.6 </td>
   <td style="text-align:right;"> 5410671 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 6.54 </td>
   <td style="text-align:right;"> 12.6 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 53.2 </td>
   <td style="text-align:right;"> 147.2 </td>
   <td style="text-align:right;"> 13.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 73 </td>
   <td style="text-align:right;"> 650434.7 </td>
   <td style="text-align:right;"> 5404620 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 7.33 </td>
   <td style="text-align:right;"> 27.2 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 95.4 </td>
   <td style="text-align:right;"> 543.3 </td>
   <td style="text-align:right;"> 22.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:right;"> 651339.4 </td>
   <td style="text-align:right;"> 5332605 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 6.79 </td>
   <td style="text-align:right;"> 32.2 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 50.6 </td>
   <td style="text-align:right;"> 57.4 </td>
   <td style="text-align:right;"> 22.3 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 75 </td>
   <td style="text-align:right;"> 651748.9 </td>
   <td style="text-align:right;"> 5300596 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 6.35 </td>
   <td style="text-align:right;"> 40.1 </td>
   <td style="text-align:right;"> 4.1 </td>
   <td style="text-align:right;"> 47.8 </td>
   <td style="text-align:right;"> 151.0 </td>
   <td style="text-align:right;"> 20.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 76 </td>
   <td style="text-align:right;"> 647675.0 </td>
   <td style="text-align:right;"> 5306549 </td>
   <td style="text-align:right;"> 0 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 5.67 </td>
   <td style="text-align:right;"> 63.2 </td>
   <td style="text-align:right;"> 5.4 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 99.7 </td>
   <td style="text-align:right;"> 28.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 77 </td>
   <td style="text-align:right;"> 641883.8 </td>
   <td style="text-align:right;"> 5290470 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 5.84 </td>
   <td style="text-align:right;"> 50.8 </td>
   <td style="text-align:right;"> 5.2 </td>
   <td style="text-align:right;"> 21.1 </td>
   <td style="text-align:right;"> 115.5 </td>
   <td style="text-align:right;"> 29.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 78 </td>
   <td style="text-align:right;"> 633763.7 </td>
   <td style="text-align:right;"> 5300372 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 6.84 </td>
   <td style="text-align:right;"> 53.5 </td>
   <td style="text-align:right;"> 5.7 </td>
   <td style="text-align:right;"> 13.5 </td>
   <td style="text-align:right;"> 166.6 </td>
   <td style="text-align:right;"> 32.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 79 </td>
   <td style="text-align:right;"> 779726.1 </td>
   <td style="text-align:right;"> 5458249 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 6.49 </td>
   <td style="text-align:right;"> 57.3 </td>
   <td style="text-align:right;"> 5.2 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:right;"> 67.4 </td>
   <td style="text-align:right;"> 17.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 80 </td>
   <td style="text-align:right;"> 775645.8 </td>
   <td style="text-align:right;"> 5464203 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 6.35 </td>
   <td style="text-align:right;"> 15.6 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 76.6 </td>
   <td style="text-align:right;"> 543.1 </td>
   <td style="text-align:right;"> 10.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 81 </td>
   <td style="text-align:right;"> 771799.3 </td>
   <td style="text-align:right;"> 5452147 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 7.07 </td>
   <td style="text-align:right;"> 17.4 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 139.4 </td>
   <td style="text-align:right;"> 688.1 </td>
   <td style="text-align:right;"> 7.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 82 </td>
   <td style="text-align:right;"> 765772.8 </td>
   <td style="text-align:right;"> 5454076 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 6.27 </td>
   <td style="text-align:right;"> 21.0 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 74.5 </td>
   <td style="text-align:right;"> 482.4 </td>
   <td style="text-align:right;"> 9.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 83 </td>
   <td style="text-align:right;"> 761720.6 </td>
   <td style="text-align:right;"> 5458028 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 5.59 </td>
   <td style="text-align:right;"> 24.4 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 43.3 </td>
   <td style="text-align:right;"> 282.1 </td>
   <td style="text-align:right;"> 9.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 84 </td>
   <td style="text-align:right;"> 757460.7 </td>
   <td style="text-align:right;"> 5477988 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 7.20 </td>
   <td style="text-align:right;"> 15.8 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 65.7 </td>
   <td style="text-align:right;"> 414.3 </td>
   <td style="text-align:right;"> 14.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 85 </td>
   <td style="text-align:right;"> 753173.0 </td>
   <td style="text-align:right;"> 5499946 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 7.00 </td>
   <td style="text-align:right;"> 15.7 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 51.8 </td>
   <td style="text-align:right;"> 183.2 </td>
   <td style="text-align:right;"> 9.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 86 </td>
   <td style="text-align:right;"> 751899.5 </td>
   <td style="text-align:right;"> 5443901 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 6.18 </td>
   <td style="text-align:right;"> 29.5 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 14.6 </td>
   <td style="text-align:right;"> 213.3 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 87 </td>
   <td style="text-align:right;"> 747536.9 </td>
   <td style="text-align:right;"> 5471862 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 6.20 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 63.5 </td>
   <td style="text-align:right;"> 130.9 </td>
   <td style="text-align:right;"> 7.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 88 </td>
   <td style="text-align:right;"> 747820.6 </td>
   <td style="text-align:right;"> 5449854 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 5.37 </td>
   <td style="text-align:right;"> 9.3 </td>
   <td style="text-align:right;"> 1.0 </td>
   <td style="text-align:right;"> 147.3 </td>
   <td style="text-align:right;"> 280.6 </td>
   <td style="text-align:right;"> 6.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 89 </td>
   <td style="text-align:right;"> 748051.9 </td>
   <td style="text-align:right;"> 5431845 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 8.08 </td>
   <td style="text-align:right;"> 31.1 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 45.2 </td>
   <td style="text-align:right;"> 138.7 </td>
   <td style="text-align:right;"> 20.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 90 </td>
   <td style="text-align:right;"> 744805.7 </td>
   <td style="text-align:right;"> 5527855 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 5.34 </td>
   <td style="text-align:right;"> 62.7 </td>
   <td style="text-align:right;"> 5.2 </td>
   <td style="text-align:right;"> 15.0 </td>
   <td style="text-align:right;"> 58.6 </td>
   <td style="text-align:right;"> 15.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 91 </td>
   <td style="text-align:right;"> 746127.0 </td>
   <td style="text-align:right;"> 5425818 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 7.26 </td>
   <td style="text-align:right;"> 54.2 </td>
   <td style="text-align:right;"> 5.2 </td>
   <td style="text-align:right;"> 22.9 </td>
   <td style="text-align:right;"> 196.4 </td>
   <td style="text-align:right;"> 38.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 92 </td>
   <td style="text-align:right;"> 738751.2 </td>
   <td style="text-align:right;"> 5531779 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 6.69 </td>
   <td style="text-align:right;"> 16.5 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 95.8 </td>
   <td style="text-align:right;"> 218.3 </td>
   <td style="text-align:right;"> 11.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 93 </td>
   <td style="text-align:right;"> 739118.4 </td>
   <td style="text-align:right;"> 5503778 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 5.96 </td>
   <td style="text-align:right;"> 30.7 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 17.2 </td>
   <td style="text-align:right;"> 138.3 </td>
   <td style="text-align:right;"> 10.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 94 </td>
   <td style="text-align:right;"> 739405.1 </td>
   <td style="text-align:right;"> 5481764 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 6.07 </td>
   <td style="text-align:right;"> 29.8 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:right;"> 15.7 </td>
   <td style="text-align:right;"> 76.6 </td>
   <td style="text-align:right;"> 14.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 95 </td>
   <td style="text-align:right;"> 735325.8 </td>
   <td style="text-align:right;"> 5487720 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 7.07 </td>
   <td style="text-align:right;"> 12.6 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 45.5 </td>
   <td style="text-align:right;"> 194.3 </td>
   <td style="text-align:right;"> 13.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 96 </td>
   <td style="text-align:right;"> 735871.1 </td>
   <td style="text-align:right;"> 5445705 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 5.78 </td>
   <td style="text-align:right;"> 22.1 </td>
   <td style="text-align:right;"> 2.3 </td>
   <td style="text-align:right;"> 50.0 </td>
   <td style="text-align:right;"> 305.7 </td>
   <td style="text-align:right;"> 10.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 97 </td>
   <td style="text-align:right;"> 732802.2 </td>
   <td style="text-align:right;"> 5527702 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 5.46 </td>
   <td style="text-align:right;"> 32.0 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 69.0 </td>
   <td style="text-align:right;"> 71.0 </td>
   <td style="text-align:right;"> 7.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 98 </td>
   <td style="text-align:right;"> 733430.1 </td>
   <td style="text-align:right;"> 5479691 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 7.21 </td>
   <td style="text-align:right;"> 13.9 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 59.4 </td>
   <td style="text-align:right;"> 155.2 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 99 </td>
   <td style="text-align:right;"> 730934.1 </td>
   <td style="text-align:right;"> 5517675 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:right;"> 5.24 </td>
   <td style="text-align:right;"> 15.2 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 38.9 </td>
   <td style="text-align:right;"> 79.2 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 100 </td>
   <td style="text-align:right;"> 731168.6 </td>
   <td style="text-align:right;"> 5499671 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 67 </td>
   <td style="text-align:right;"> 5.93 </td>
   <td style="text-align:right;"> 9.1 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 49.8 </td>
   <td style="text-align:right;"> 243.8 </td>
   <td style="text-align:right;"> 5.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 101 </td>
   <td style="text-align:right;"> 732103.6 </td>
   <td style="text-align:right;"> 5427645 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 70 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 7.36 </td>
   <td style="text-align:right;"> 16.6 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 54.0 </td>
   <td style="text-align:right;"> 665.6 </td>
   <td style="text-align:right;"> 18.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 102 </td>
   <td style="text-align:right;"> 729586.7 </td>
   <td style="text-align:right;"> 5467637 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 79 </td>
   <td style="text-align:right;"> 7.07 </td>
   <td style="text-align:right;"> 14.4 </td>
   <td style="text-align:right;"> 1.2 </td>
   <td style="text-align:right;"> 43.5 </td>
   <td style="text-align:right;"> 189.0 </td>
   <td style="text-align:right;"> 7.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 103 </td>
   <td style="text-align:right;"> 727746.0 </td>
   <td style="text-align:right;"> 5455610 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 5.60 </td>
   <td style="text-align:right;"> 48.9 </td>
   <td style="text-align:right;"> 4.4 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 99.5 </td>
   <td style="text-align:right;"> 20.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 104 </td>
   <td style="text-align:right;"> 727896.5 </td>
   <td style="text-align:right;"> 5443603 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 6.17 </td>
   <td style="text-align:right;"> 9.8 </td>
   <td style="text-align:right;"> 0.9 </td>
   <td style="text-align:right;"> 76.2 </td>
   <td style="text-align:right;"> 145.7 </td>
   <td style="text-align:right;"> 4.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 105 </td>
   <td style="text-align:right;"> 722052.4 </td>
   <td style="text-align:right;"> 5431527 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 7.25 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 48.8 </td>
   <td style="text-align:right;"> 167.8 </td>
   <td style="text-align:right;"> 14.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 106 </td>
   <td style="text-align:right;"> 717559.4 </td>
   <td style="text-align:right;"> 5469493 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 77 </td>
   <td style="text-align:right;"> 7.39 </td>
   <td style="text-align:right;"> 7.9 </td>
   <td style="text-align:right;"> 0.9 </td>
   <td style="text-align:right;"> 30.5 </td>
   <td style="text-align:right;"> 166.7 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 107 </td>
   <td style="text-align:right;"> 711117.0 </td>
   <td style="text-align:right;"> 5503418 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 73 </td>
   <td style="text-align:right;"> 5.49 </td>
   <td style="text-align:right;"> 23.8 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 41.2 </td>
   <td style="text-align:right;"> 42.9 </td>
   <td style="text-align:right;"> 8.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 108 </td>
   <td style="text-align:right;"> 708801.8 </td>
   <td style="text-align:right;"> 5527395 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:right;"> 5.70 </td>
   <td style="text-align:right;"> 23.0 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 17.3 </td>
   <td style="text-align:right;"> 120.8 </td>
   <td style="text-align:right;"> 8.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 109 </td>
   <td style="text-align:right;"> 709976.3 </td>
   <td style="text-align:right;"> 5437380 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 7.50 </td>
   <td style="text-align:right;"> 20.5 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 49.4 </td>
   <td style="text-align:right;"> 308.9 </td>
   <td style="text-align:right;"> 22.8 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 110 </td>
   <td style="text-align:right;"> 706774.9 </td>
   <td style="text-align:right;"> 5529370 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 7.61 </td>
   <td style="text-align:right;"> 33.7 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 20.4 </td>
   <td style="text-align:right;"> 203.5 </td>
   <td style="text-align:right;"> 24.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 111 </td>
   <td style="text-align:right;"> 704958.2 </td>
   <td style="text-align:right;"> 5515346 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 75 </td>
   <td style="text-align:right;"> 6.17 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 51.8 </td>
   <td style="text-align:right;"> 90.1 </td>
   <td style="text-align:right;"> 7.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 112 </td>
   <td style="text-align:right;"> 703169.4 </td>
   <td style="text-align:right;"> 5499315 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 5.90 </td>
   <td style="text-align:right;"> 36.8 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:right;"> 68.9 </td>
   <td style="text-align:right;"> 13.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 113 </td>
   <td style="text-align:right;"> 703404.7 </td>
   <td style="text-align:right;"> 5481313 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 67 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 7.12 </td>
   <td style="text-align:right;"> 11.3 </td>
   <td style="text-align:right;"> 1.2 </td>
   <td style="text-align:right;"> 25.0 </td>
   <td style="text-align:right;"> 209.6 </td>
   <td style="text-align:right;"> 10.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 114 </td>
   <td style="text-align:right;"> 701274.9 </td>
   <td style="text-align:right;"> 5491289 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 6.53 </td>
   <td style="text-align:right;"> 22.9 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 29.1 </td>
   <td style="text-align:right;"> 53.5 </td>
   <td style="text-align:right;"> 9.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 115 </td>
   <td style="text-align:right;"> 699924.5 </td>
   <td style="text-align:right;"> 5441255 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 6.49 </td>
   <td style="text-align:right;"> 21.7 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 82.1 </td>
   <td style="text-align:right;"> 289.9 </td>
   <td style="text-align:right;"> 16.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 116 </td>
   <td style="text-align:right;"> 695873.4 </td>
   <td style="text-align:right;"> 5445206 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 7.11 </td>
   <td style="text-align:right;"> 22.7 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 87.3 </td>
   <td style="text-align:right;"> 529.5 </td>
   <td style="text-align:right;"> 17.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 117 </td>
   <td style="text-align:right;"> 690960.2 </td>
   <td style="text-align:right;"> 5515165 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 5.35 </td>
   <td style="text-align:right;"> 23.5 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 45.5 </td>
   <td style="text-align:right;"> 4.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 118 </td>
   <td style="text-align:right;"> 690084.8 </td>
   <td style="text-align:right;"> 5429127 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 7.16 </td>
   <td style="text-align:right;"> 17.3 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 22.3 </td>
   <td style="text-align:right;"> 233.5 </td>
   <td style="text-align:right;"> 14.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 119 </td>
   <td style="text-align:right;"> 687434.2 </td>
   <td style="text-align:right;"> 5479110 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 66 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 7.91 </td>
   <td style="text-align:right;"> 12.7 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 25.7 </td>
   <td style="text-align:right;"> 210.2 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 120 </td>
   <td style="text-align:right;"> 687668.7 </td>
   <td style="text-align:right;"> 5461108 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 67 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 6.38 </td>
   <td style="text-align:right;"> 15.2 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 50.9 </td>
   <td style="text-align:right;"> 193.3 </td>
   <td style="text-align:right;"> 12.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 121 </td>
   <td style="text-align:right;"> 685878.0 </td>
   <td style="text-align:right;"> 5445078 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 7.55 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 28.5 </td>
   <td style="text-align:right;"> 219.8 </td>
   <td style="text-align:right;"> 17.1 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 122 </td>
   <td style="text-align:right;"> 683512.7 </td>
   <td style="text-align:right;"> 5473059 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 6.93 </td>
   <td style="text-align:right;"> 13.1 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 26.8 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 10.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 123 </td>
   <td style="text-align:right;"> 677699.3 </td>
   <td style="text-align:right;"> 5458981 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 85 </td>
   <td style="text-align:right;"> 5.97 </td>
   <td style="text-align:right;"> 25.2 </td>
   <td style="text-align:right;"> 2.3 </td>
   <td style="text-align:right;"> 27.6 </td>
   <td style="text-align:right;"> 118.6 </td>
   <td style="text-align:right;"> 7.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 124 </td>
   <td style="text-align:right;"> 673751.7 </td>
   <td style="text-align:right;"> 5454931 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 6.00 </td>
   <td style="text-align:right;"> 22.3 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 64.3 </td>
   <td style="text-align:right;"> 139.8 </td>
   <td style="text-align:right;"> 12.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 125 </td>
   <td style="text-align:right;"> 632496.6 </td>
   <td style="text-align:right;"> 5550407 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 7.38 </td>
   <td style="text-align:right;"> 14.6 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 24.4 </td>
   <td style="text-align:right;"> 247.1 </td>
   <td style="text-align:right;"> 15.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 126 </td>
   <td style="text-align:right;"> 620422.9 </td>
   <td style="text-align:right;"> 5556246 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 7.43 </td>
   <td style="text-align:right;"> 14.2 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 52.7 </td>
   <td style="text-align:right;"> 471.5 </td>
   <td style="text-align:right;"> 17.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 127 </td>
   <td style="text-align:right;"> 610587.0 </td>
   <td style="text-align:right;"> 5544117 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 8.12 </td>
   <td style="text-align:right;"> 18.8 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 78.4 </td>
   <td style="text-align:right;"> 537.9 </td>
   <td style="text-align:right;"> 25.5 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 128 </td>
   <td style="text-align:right;"> 608534.3 </td>
   <td style="text-align:right;"> 5548089 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 7.09 </td>
   <td style="text-align:right;"> 30.8 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 14.1 </td>
   <td style="text-align:right;"> 145.2 </td>
   <td style="text-align:right;"> 25.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 129 </td>
   <td style="text-align:right;"> 606269.1 </td>
   <td style="text-align:right;"> 5568058 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 7.12 </td>
   <td style="text-align:right;"> 45.2 </td>
   <td style="text-align:right;"> 3.7 </td>
   <td style="text-align:right;"> 35.1 </td>
   <td style="text-align:right;"> 263.4 </td>
   <td style="text-align:right;"> 26.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 130 </td>
   <td style="text-align:right;"> 605018.0 </td>
   <td style="text-align:right;"> 5512044 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 7.15 </td>
   <td style="text-align:right;"> 11.0 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 42.7 </td>
   <td style="text-align:right;"> 254.1 </td>
   <td style="text-align:right;"> 11.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 131 </td>
   <td style="text-align:right;"> 600405.0 </td>
   <td style="text-align:right;"> 5557980 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 72 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 6.34 </td>
   <td style="text-align:right;"> 14.7 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 22.8 </td>
   <td style="text-align:right;"> 177.0 </td>
   <td style="text-align:right;"> 12.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 132 </td>
   <td style="text-align:right;"> 598565.7 </td>
   <td style="text-align:right;"> 5545956 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 6.91 </td>
   <td style="text-align:right;"> 14.6 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 23.8 </td>
   <td style="text-align:right;"> 151.1 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 133 </td>
   <td style="text-align:right;"> 596031.5 </td>
   <td style="text-align:right;"> 5585920 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 6.45 </td>
   <td style="text-align:right;"> 21.7 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 28.8 </td>
   <td style="text-align:right;"> 431.6 </td>
   <td style="text-align:right;"> 20.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 134 </td>
   <td style="text-align:right;"> 594246.2 </td>
   <td style="text-align:right;"> 5569895 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 66 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 7.53 </td>
   <td style="text-align:right;"> 16.9 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 27.7 </td>
   <td style="text-align:right;"> 233.2 </td>
   <td style="text-align:right;"> 20.5 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 135 </td>
   <td style="text-align:right;"> 594676.1 </td>
   <td style="text-align:right;"> 5537907 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 7.71 </td>
   <td style="text-align:right;"> 14.8 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 23.2 </td>
   <td style="text-align:right;"> 524.4 </td>
   <td style="text-align:right;"> 16.1 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 136 </td>
   <td style="text-align:right;"> 594967.4 </td>
   <td style="text-align:right;"> 5515911 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 6.18 </td>
   <td style="text-align:right;"> 21.0 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 11.3 </td>
   <td style="text-align:right;"> 56.7 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 137 </td>
   <td style="text-align:right;"> 590890.7 </td>
   <td style="text-align:right;"> 5521855 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 8.02 </td>
   <td style="text-align:right;"> 12.2 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 53.3 </td>
   <td style="text-align:right;"> 421.6 </td>
   <td style="text-align:right;"> 12.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 138 </td>
   <td style="text-align:right;"> 591128.2 </td>
   <td style="text-align:right;"> 5503860 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 8.05 </td>
   <td style="text-align:right;"> 17.7 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 40.0 </td>
   <td style="text-align:right;"> 643.0 </td>
   <td style="text-align:right;"> 18.9 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 139 </td>
   <td style="text-align:right;"> 589081.3 </td>
   <td style="text-align:right;"> 5507835 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 7.23 </td>
   <td style="text-align:right;"> 6.3 </td>
   <td style="text-align:right;"> 0.7 </td>
   <td style="text-align:right;"> 25.1 </td>
   <td style="text-align:right;"> 178.2 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 140 </td>
   <td style="text-align:right;"> 586544.7 </td>
   <td style="text-align:right;"> 5547797 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 6.85 </td>
   <td style="text-align:right;"> 10.2 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 41.6 </td>
   <td style="text-align:right;"> 259.1 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 141 </td>
   <td style="text-align:right;"> 583967.2 </td>
   <td style="text-align:right;"> 5591742 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 7.62 </td>
   <td style="text-align:right;"> 32.9 </td>
   <td style="text-align:right;"> 3.4 </td>
   <td style="text-align:right;"> 32.2 </td>
   <td style="text-align:right;"> 349.4 </td>
   <td style="text-align:right;"> 34.4 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 142 </td>
   <td style="text-align:right;"> 584918.3 </td>
   <td style="text-align:right;"> 5519778 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 7.93 </td>
   <td style="text-align:right;"> 17.5 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 65.7 </td>
   <td style="text-align:right;"> 585.7 </td>
   <td style="text-align:right;"> 19.5 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 143 </td>
   <td style="text-align:right;"> 582760.7 </td>
   <td style="text-align:right;"> 5531749 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 8.14 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 38.9 </td>
   <td style="text-align:right;"> 355.1 </td>
   <td style="text-align:right;"> 19.8 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 144 </td>
   <td style="text-align:right;"> 580709.7 </td>
   <td style="text-align:right;"> 5535722 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 72 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 7.90 </td>
   <td style="text-align:right;"> 13.1 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 20.3 </td>
   <td style="text-align:right;"> 239.5 </td>
   <td style="text-align:right;"> 19.2 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 145 </td>
   <td style="text-align:right;"> 577029.7 </td>
   <td style="text-align:right;"> 5511675 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 7.12 </td>
   <td style="text-align:right;"> 11.5 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 51.4 </td>
   <td style="text-align:right;"> 196.2 </td>
   <td style="text-align:right;"> 14.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 146 </td>
   <td style="text-align:right;"> 572551.0 </td>
   <td style="text-align:right;"> 5547611 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 6.90 </td>
   <td style="text-align:right;"> 38.0 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 35.7 </td>
   <td style="text-align:right;"> 356.5 </td>
   <td style="text-align:right;"> 26.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 147 </td>
   <td style="text-align:right;"> 570044.3 </td>
   <td style="text-align:right;"> 5585571 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 5.85 </td>
   <td style="text-align:right;"> 17.2 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 18.2 </td>
   <td style="text-align:right;"> 112.3 </td>
   <td style="text-align:right;"> 8.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 148 </td>
   <td style="text-align:right;"> 570267.7 </td>
   <td style="text-align:right;"> 5567576 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 6.61 </td>
   <td style="text-align:right;"> 9.6 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 29.0 </td>
   <td style="text-align:right;"> 143.5 </td>
   <td style="text-align:right;"> 6.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 149 </td>
   <td style="text-align:right;"> 569275.2 </td>
   <td style="text-align:right;"> 5493572 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 72 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 7.79 </td>
   <td style="text-align:right;"> 12.4 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 36.8 </td>
   <td style="text-align:right;"> 196.8 </td>
   <td style="text-align:right;"> 14.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 150 </td>
   <td style="text-align:right;"> 566877.0 </td>
   <td style="text-align:right;"> 5523538 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 8.12 </td>
   <td style="text-align:right;"> 20.1 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 70.1 </td>
   <td style="text-align:right;"> 534.0 </td>
   <td style="text-align:right;"> 26.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 151 </td>
   <td style="text-align:right;"> 567113.1 </td>
   <td style="text-align:right;"> 5505545 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 7.09 </td>
   <td style="text-align:right;"> 21.6 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 22.0 </td>
   <td style="text-align:right;"> 245.4 </td>
   <td style="text-align:right;"> 25.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 152 </td>
   <td style="text-align:right;"> 564420.8 </td>
   <td style="text-align:right;"> 5557500 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 7.39 </td>
   <td style="text-align:right;"> 24.2 </td>
   <td style="text-align:right;"> 2.3 </td>
   <td style="text-align:right;"> 17.9 </td>
   <td style="text-align:right;"> 279.1 </td>
   <td style="text-align:right;"> 14.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 153 </td>
   <td style="text-align:right;"> 562717.9 </td>
   <td style="text-align:right;"> 5535478 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 6.85 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 29.6 </td>
   <td style="text-align:right;"> 322.0 </td>
   <td style="text-align:right;"> 24.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 154 </td>
   <td style="text-align:right;"> 558799.2 </td>
   <td style="text-align:right;"> 5529428 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 79 </td>
   <td style="text-align:right;"> 7.75 </td>
   <td style="text-align:right;"> 8.4 </td>
   <td style="text-align:right;"> 0.8 </td>
   <td style="text-align:right;"> 30.0 </td>
   <td style="text-align:right;"> 65.8 </td>
   <td style="text-align:right;"> 8.4 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 155 </td>
   <td style="text-align:right;"> 554079.1 </td>
   <td style="text-align:right;"> 5583355 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 5.36 </td>
   <td style="text-align:right;"> 24.6 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 19.2 </td>
   <td style="text-align:right;"> 247.2 </td>
   <td style="text-align:right;"> 5.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 156 </td>
   <td style="text-align:right;"> 554991.9 </td>
   <td style="text-align:right;"> 5515379 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 66 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 7.91 </td>
   <td style="text-align:right;"> 10.7 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 34.7 </td>
   <td style="text-align:right;"> 194.4 </td>
   <td style="text-align:right;"> 18.5 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 157 </td>
   <td style="text-align:right;"> 552857.6 </td>
   <td style="text-align:right;"> 5525351 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 78 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 7.06 </td>
   <td style="text-align:right;"> 12.4 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 68.3 </td>
   <td style="text-align:right;"> 274.2 </td>
   <td style="text-align:right;"> 14.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 158 </td>
   <td style="text-align:right;"> 553024.3 </td>
   <td style="text-align:right;"> 5513351 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 7.45 </td>
   <td style="text-align:right;"> 16.6 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 37.0 </td>
   <td style="text-align:right;"> 365.6 </td>
   <td style="text-align:right;"> 21.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 159 </td>
   <td style="text-align:right;"> 519172.3 </td>
   <td style="text-align:right;"> 5502901 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 5.96 </td>
   <td style="text-align:right;"> 14.9 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 56.3 </td>
   <td style="text-align:right;"> 245.4 </td>
   <td style="text-align:right;"> 7.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 160 </td>
   <td style="text-align:right;"> 510618.5 </td>
   <td style="text-align:right;"> 5542815 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 6.31 </td>
   <td style="text-align:right;"> 14.0 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 48.1 </td>
   <td style="text-align:right;"> 248.0 </td>
   <td style="text-align:right;"> 8.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 161 </td>
   <td style="text-align:right;"> 508615.3 </td>
   <td style="text-align:right;"> 5544746 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 5.82 </td>
   <td style="text-align:right;"> 8.7 </td>
   <td style="text-align:right;"> 1.0 </td>
   <td style="text-align:right;"> 44.9 </td>
   <td style="text-align:right;"> 142.5 </td>
   <td style="text-align:right;"> 8.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 162 </td>
   <td style="text-align:right;"> 508892.7 </td>
   <td style="text-align:right;"> 5526799 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 67 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 6.62 </td>
   <td style="text-align:right;"> 8.4 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 22.6 </td>
   <td style="text-align:right;"> 107.8 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 163 </td>
   <td style="text-align:right;"> 718600.3 </td>
   <td style="text-align:right;"> 5545446 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 6.71 </td>
   <td style="text-align:right;"> 17.2 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 42.6 </td>
   <td style="text-align:right;"> 144.8 </td>
   <td style="text-align:right;"> 8.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 164 </td>
   <td style="text-align:right;"> 712460.6 </td>
   <td style="text-align:right;"> 5553452 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 5.89 </td>
   <td style="text-align:right;"> 25.0 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 70.0 </td>
   <td style="text-align:right;"> 208.3 </td>
   <td style="text-align:right;"> 9.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 165 </td>
   <td style="text-align:right;"> 710165.2 </td>
   <td style="text-align:right;"> 5575427 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 7.19 </td>
   <td style="text-align:right;"> 17.1 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 41.0 </td>
   <td style="text-align:right;"> 85.9 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 166 </td>
   <td style="text-align:right;"> 698377.9 </td>
   <td style="text-align:right;"> 5559270 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 5.18 </td>
   <td style="text-align:right;"> 30.5 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 11.4 </td>
   <td style="text-align:right;"> 48.7 </td>
   <td style="text-align:right;"> 7.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 167 </td>
   <td style="text-align:right;"> 690564.4 </td>
   <td style="text-align:right;"> 5545167 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 6.07 </td>
   <td style="text-align:right;"> 25.4 </td>
   <td style="text-align:right;"> 2.6 </td>
   <td style="text-align:right;"> 10.6 </td>
   <td style="text-align:right;"> 88.5 </td>
   <td style="text-align:right;"> 17.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 168 </td>
   <td style="text-align:right;"> 686724.1 </td>
   <td style="text-align:right;"> 5533114 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 66 </td>
   <td style="text-align:right;"> 6.06 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 62.2 </td>
   <td style="text-align:right;"> 8.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 169 </td>
   <td style="text-align:right;"> 678247.5 </td>
   <td style="text-align:right;"> 5569008 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 6.31 </td>
   <td style="text-align:right;"> 30.8 </td>
   <td style="text-align:right;"> 2.8 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 151.6 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 170 </td>
   <td style="text-align:right;"> 676698.8 </td>
   <td style="text-align:right;"> 5534984 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 5.13 </td>
   <td style="text-align:right;"> 27.8 </td>
   <td style="text-align:right;"> 2.8 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 91.6 </td>
   <td style="text-align:right;"> 14.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 171 </td>
   <td style="text-align:right;"> 674831.1 </td>
   <td style="text-align:right;"> 5524958 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 7.74 </td>
   <td style="text-align:right;"> 43.2 </td>
   <td style="text-align:right;"> 3.9 </td>
   <td style="text-align:right;"> 143.2 </td>
   <td style="text-align:right;"> 652.7 </td>
   <td style="text-align:right;"> 35.4 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 172 </td>
   <td style="text-align:right;"> 670433.2 </td>
   <td style="text-align:right;"> 5554906 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 7.07 </td>
   <td style="text-align:right;"> 29.7 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:right;"> 45.0 </td>
   <td style="text-align:right;"> 475.5 </td>
   <td style="text-align:right;"> 25.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 173 </td>
   <td style="text-align:right;"> 668727.3 </td>
   <td style="text-align:right;"> 5532878 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 57 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 7.65 </td>
   <td style="text-align:right;"> 29.4 </td>
   <td style="text-align:right;"> 2.8 </td>
   <td style="text-align:right;"> 108.5 </td>
   <td style="text-align:right;"> 406.7 </td>
   <td style="text-align:right;"> 24.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 174 </td>
   <td style="text-align:right;"> 664330.0 </td>
   <td style="text-align:right;"> 5562825 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 70 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 6.13 </td>
   <td style="text-align:right;"> 13.5 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 41.2 </td>
   <td style="text-align:right;"> 201.0 </td>
   <td style="text-align:right;"> 12.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 175 </td>
   <td style="text-align:right;"> 663096.3 </td>
   <td style="text-align:right;"> 5504801 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 6.44 </td>
   <td style="text-align:right;"> 20.9 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 13.4 </td>
   <td style="text-align:right;"> 82.7 </td>
   <td style="text-align:right;"> 17.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 176 </td>
   <td style="text-align:right;"> 656650.9 </td>
   <td style="text-align:right;"> 5538721 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 7.60 </td>
   <td style="text-align:right;"> 18.9 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 19.0 </td>
   <td style="text-align:right;"> 271.3 </td>
   <td style="text-align:right;"> 23.1 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 177 </td>
   <td style="text-align:right;"> 654332.3 </td>
   <td style="text-align:right;"> 5562693 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 6.86 </td>
   <td style="text-align:right;"> 15.4 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 35.5 </td>
   <td style="text-align:right;"> 116.4 </td>
   <td style="text-align:right;"> 12.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 178 </td>
   <td style="text-align:right;"> 654489.6 </td>
   <td style="text-align:right;"> 5550694 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 7.39 </td>
   <td style="text-align:right;"> 38.7 </td>
   <td style="text-align:right;"> 3.7 </td>
   <td style="text-align:right;"> 58.9 </td>
   <td style="text-align:right;"> 943.0 </td>
   <td style="text-align:right;"> 37.3 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 179 </td>
   <td style="text-align:right;"> 654811.6 </td>
   <td style="text-align:right;"> 5526698 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 7.78 </td>
   <td style="text-align:right;"> 36.6 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 71.6 </td>
   <td style="text-align:right;"> 747.8 </td>
   <td style="text-align:right;"> 32.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 180 </td>
   <td style="text-align:right;"> 655043.8 </td>
   <td style="text-align:right;"> 5508700 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 7.95 </td>
   <td style="text-align:right;"> 15.3 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 34.0 </td>
   <td style="text-align:right;"> 295.9 </td>
   <td style="text-align:right;"> 17.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 181 </td>
   <td style="text-align:right;"> 648280.5 </td>
   <td style="text-align:right;"> 5566615 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 7.49 </td>
   <td style="text-align:right;"> 32.0 </td>
   <td style="text-align:right;"> 3.1 </td>
   <td style="text-align:right;"> 64.1 </td>
   <td style="text-align:right;"> 609.8 </td>
   <td style="text-align:right;"> 29.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 182 </td>
   <td style="text-align:right;"> 644521.5 </td>
   <td style="text-align:right;"> 5548565 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 5.91 </td>
   <td style="text-align:right;"> 48.5 </td>
   <td style="text-align:right;"> 4.8 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 405.3 </td>
   <td style="text-align:right;"> 30.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 183 </td>
   <td style="text-align:right;"> 640709.2 </td>
   <td style="text-align:right;"> 5534517 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 7.46 </td>
   <td style="text-align:right;"> 19.1 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 22.2 </td>
   <td style="text-align:right;"> 155.6 </td>
   <td style="text-align:right;"> 14.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 184 </td>
   <td style="text-align:right;"> 638841.6 </td>
   <td style="text-align:right;"> 5524488 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 6.83 </td>
   <td style="text-align:right;"> 22.8 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 27.0 </td>
   <td style="text-align:right;"> 99.0 </td>
   <td style="text-align:right;"> 23.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 185 </td>
   <td style="text-align:right;"> 636733.6 </td>
   <td style="text-align:right;"> 5532461 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 6.35 </td>
   <td style="text-align:right;"> 61.2 </td>
   <td style="text-align:right;"> 6.1 </td>
   <td style="text-align:right;"> 12.0 </td>
   <td style="text-align:right;"> 150.9 </td>
   <td style="text-align:right;"> 39.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 186 </td>
   <td style="text-align:right;"> 634925.9 </td>
   <td style="text-align:right;"> 5518440 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 6.38 </td>
   <td style="text-align:right;"> 9.5 </td>
   <td style="text-align:right;"> 1.0 </td>
   <td style="text-align:right;"> 19.6 </td>
   <td style="text-align:right;"> 179.3 </td>
   <td style="text-align:right;"> 9.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 187 </td>
   <td style="text-align:right;"> 626634.6 </td>
   <td style="text-align:right;"> 5540329 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 5.90 </td>
   <td style="text-align:right;"> 13.9 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:right;"> 62.3 </td>
   <td style="text-align:right;"> 8.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 188 </td>
   <td style="text-align:right;"> 622955.2 </td>
   <td style="text-align:right;"> 5516280 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 6.66 </td>
   <td style="text-align:right;"> 9.3 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 50.2 </td>
   <td style="text-align:right;"> 147.3 </td>
   <td style="text-align:right;"> 7.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 189 </td>
   <td style="text-align:right;"> 658950.5 </td>
   <td style="text-align:right;"> 5362713 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 7.05 </td>
   <td style="text-align:right;"> 18.9 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 59.0 </td>
   <td style="text-align:right;"> 226.6 </td>
   <td style="text-align:right;"> 15.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 190 </td>
   <td style="text-align:right;"> 656694.0 </td>
   <td style="text-align:right;"> 5382693 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 6.63 </td>
   <td style="text-align:right;"> 44.3 </td>
   <td style="text-align:right;"> 5.1 </td>
   <td style="text-align:right;"> 17.8 </td>
   <td style="text-align:right;"> 110.9 </td>
   <td style="text-align:right;"> 32.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 191 </td>
   <td style="text-align:right;"> 657081.0 </td>
   <td style="text-align:right;"> 5352686 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 7.48 </td>
   <td style="text-align:right;"> 24.4 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:right;"> 108.7 </td>
   <td style="text-align:right;"> 19.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 192 </td>
   <td style="text-align:right;"> 651109.7 </td>
   <td style="text-align:right;"> 5350613 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 6.67 </td>
   <td style="text-align:right;"> 14.2 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 64.4 </td>
   <td style="text-align:right;"> 235.0 </td>
   <td style="text-align:right;"> 16.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 193 </td>
   <td style="text-align:right;"> 646828.4 </td>
   <td style="text-align:right;"> 5372566 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 6.05 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 60.9 </td>
   <td style="text-align:right;"> 224.0 </td>
   <td style="text-align:right;"> 17.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 194 </td>
   <td style="text-align:right;"> 644931.3 </td>
   <td style="text-align:right;"> 5364538 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 7.46 </td>
   <td style="text-align:right;"> 59.7 </td>
   <td style="text-align:right;"> 5.4 </td>
   <td style="text-align:right;"> 24.4 </td>
   <td style="text-align:right;"> 100.6 </td>
   <td style="text-align:right;"> 39.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 195 </td>
   <td style="text-align:right;"> 640727.4 </td>
   <td style="text-align:right;"> 5380492 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 7.38 </td>
   <td style="text-align:right;"> 49.3 </td>
   <td style="text-align:right;"> 4.9 </td>
   <td style="text-align:right;"> 62.3 </td>
   <td style="text-align:right;"> 117.1 </td>
   <td style="text-align:right;"> 29.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 196 </td>
   <td style="text-align:right;"> 638391.3 </td>
   <td style="text-align:right;"> 5406468 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 6.54 </td>
   <td style="text-align:right;"> 14.2 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 64.7 </td>
   <td style="text-align:right;"> 204.4 </td>
   <td style="text-align:right;"> 9.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 197 </td>
   <td style="text-align:right;"> 636573.8 </td>
   <td style="text-align:right;"> 5392446 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 8.08 </td>
   <td style="text-align:right;"> 40.3 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 59.6 </td>
   <td style="text-align:right;"> 162.5 </td>
   <td style="text-align:right;"> 18.7 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 198 </td>
   <td style="text-align:right;"> 636891.3 </td>
   <td style="text-align:right;"> 5366442 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 65 </td>
   <td style="text-align:right;"> 6.50 </td>
   <td style="text-align:right;"> 10.5 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 59.9 </td>
   <td style="text-align:right;"> 198.2 </td>
   <td style="text-align:right;"> 7.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 199 </td>
   <td style="text-align:right;"> 634627.7 </td>
   <td style="text-align:right;"> 5388417 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 7.50 </td>
   <td style="text-align:right;"> 66.5 </td>
   <td style="text-align:right;"> 6.3 </td>
   <td style="text-align:right;"> 54.0 </td>
   <td style="text-align:right;"> 192.7 </td>
   <td style="text-align:right;"> 54.2 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 200 </td>
   <td style="text-align:right;"> 635093.0 </td>
   <td style="text-align:right;"> 5352410 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 7.32 </td>
   <td style="text-align:right;"> 24.6 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 45.9 </td>
   <td style="text-align:right;"> 155.1 </td>
   <td style="text-align:right;"> 26.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 201 </td>
   <td style="text-align:right;"> 633302.5 </td>
   <td style="text-align:right;"> 5336385 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 72 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 6.61 </td>
   <td style="text-align:right;"> 9.2 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 30.0 </td>
   <td style="text-align:right;"> 157.4 </td>
   <td style="text-align:right;"> 8.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 202 </td>
   <td style="text-align:right;"> 633533.8 </td>
   <td style="text-align:right;"> 5318379 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 6.24 </td>
   <td style="text-align:right;"> 121.2 </td>
   <td style="text-align:right;"> 12.2 </td>
   <td style="text-align:right;"> 33.5 </td>
   <td style="text-align:right;"> 86.8 </td>
   <td style="text-align:right;"> 62.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 203 </td>
   <td style="text-align:right;"> 634042.9 </td>
   <td style="text-align:right;"> 5278365 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 6.35 </td>
   <td style="text-align:right;"> 37.5 </td>
   <td style="text-align:right;"> 3.9 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 85.4 </td>
   <td style="text-align:right;"> 20.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 204 </td>
   <td style="text-align:right;"> 631636.7 </td>
   <td style="text-align:right;"> 5310352 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 6.30 </td>
   <td style="text-align:right;"> 43.3 </td>
   <td style="text-align:right;"> 4.4 </td>
   <td style="text-align:right;"> 43.1 </td>
   <td style="text-align:right;"> 319.3 </td>
   <td style="text-align:right;"> 23.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 205 </td>
   <td style="text-align:right;"> 629996.9 </td>
   <td style="text-align:right;"> 5282319 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 7.12 </td>
   <td style="text-align:right;"> 55.8 </td>
   <td style="text-align:right;"> 5.7 </td>
   <td style="text-align:right;"> 21.8 </td>
   <td style="text-align:right;"> 119.8 </td>
   <td style="text-align:right;"> 31.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 206 </td>
   <td style="text-align:right;"> 627332.9 </td>
   <td style="text-align:right;"> 5334307 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 7.10 </td>
   <td style="text-align:right;"> 68.3 </td>
   <td style="text-align:right;"> 6.5 </td>
   <td style="text-align:right;"> 40.2 </td>
   <td style="text-align:right;"> 211.9 </td>
   <td style="text-align:right;"> 37.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 207 </td>
   <td style="text-align:right;"> 627794.9 </td>
   <td style="text-align:right;"> 5298297 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 7.04 </td>
   <td style="text-align:right;"> 69.4 </td>
   <td style="text-align:right;"> 6.5 </td>
   <td style="text-align:right;"> 67.5 </td>
   <td style="text-align:right;"> 217.0 </td>
   <td style="text-align:right;"> 33.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 208 </td>
   <td style="text-align:right;"> 623949.8 </td>
   <td style="text-align:right;"> 5286244 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 5.57 </td>
   <td style="text-align:right;"> 30.8 </td>
   <td style="text-align:right;"> 3.3 </td>
   <td style="text-align:right;"> 10.9 </td>
   <td style="text-align:right;"> 56.3 </td>
   <td style="text-align:right;"> 10.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 209 </td>
   <td style="text-align:right;"> 620167.6 </td>
   <td style="text-align:right;"> 5424238 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 7.82 </td>
   <td style="text-align:right;"> 20.1 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 23.6 </td>
   <td style="text-align:right;"> 710.4 </td>
   <td style="text-align:right;"> 28.2 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 210 </td>
   <td style="text-align:right;"> 620404.2 </td>
   <td style="text-align:right;"> 5406237 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 7.19 </td>
   <td style="text-align:right;"> 32.3 </td>
   <td style="text-align:right;"> 3.3 </td>
   <td style="text-align:right;"> 19.1 </td>
   <td style="text-align:right;"> 173.9 </td>
   <td style="text-align:right;"> 30.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 211 </td>
   <td style="text-align:right;"> 620638.0 </td>
   <td style="text-align:right;"> 5388237 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 65 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 7.54 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 28.2 </td>
   <td style="text-align:right;"> 298.6 </td>
   <td style="text-align:right;"> 19.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 212 </td>
   <td style="text-align:right;"> 621181.7 </td>
   <td style="text-align:right;"> 5346233 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 5.78 </td>
   <td style="text-align:right;"> 21.9 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 12.1 </td>
   <td style="text-align:right;"> 126.5 </td>
   <td style="text-align:right;"> 13.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 213 </td>
   <td style="text-align:right;"> 621413.6 </td>
   <td style="text-align:right;"> 5328231 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 5.66 </td>
   <td style="text-align:right;"> 32.9 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 14.9 </td>
   <td style="text-align:right;"> 42.1 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 214 </td>
   <td style="text-align:right;"> 618957.6 </td>
   <td style="text-align:right;"> 5362223 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 76 </td>
   <td style="text-align:right;"> 5.88 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 57.8 </td>
   <td style="text-align:right;"> 239.1 </td>
   <td style="text-align:right;"> 6.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 215 </td>
   <td style="text-align:right;"> 619620.3 </td>
   <td style="text-align:right;"> 5312201 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 6.39 </td>
   <td style="text-align:right;"> 22.1 </td>
   <td style="text-align:right;"> 2.3 </td>
   <td style="text-align:right;"> 12.8 </td>
   <td style="text-align:right;"> 182.3 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 216 </td>
   <td style="text-align:right;"> 619672.0 </td>
   <td style="text-align:right;"> 5308201 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 6.86 </td>
   <td style="text-align:right;"> 61.6 </td>
   <td style="text-align:right;"> 6.3 </td>
   <td style="text-align:right;"> 46.6 </td>
   <td style="text-align:right;"> 388.9 </td>
   <td style="text-align:right;"> 49.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 217 </td>
   <td style="text-align:right;"> 620082.2 </td>
   <td style="text-align:right;"> 5276192 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 7.17 </td>
   <td style="text-align:right;"> 55.8 </td>
   <td style="text-align:right;"> 5.7 </td>
   <td style="text-align:right;"> 31.6 </td>
   <td style="text-align:right;"> 74.8 </td>
   <td style="text-align:right;"> 28.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 218 </td>
   <td style="text-align:right;"> 617109.0 </td>
   <td style="text-align:right;"> 5352183 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 6.09 </td>
   <td style="text-align:right;"> 36.8 </td>
   <td style="text-align:right;"> 3.6 </td>
   <td style="text-align:right;"> 26.5 </td>
   <td style="text-align:right;"> 73.0 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 219 </td>
   <td style="text-align:right;"> 618032.4 </td>
   <td style="text-align:right;"> 5280167 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 6.54 </td>
   <td style="text-align:right;"> 42.0 </td>
   <td style="text-align:right;"> 4.1 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 72.0 </td>
   <td style="text-align:right;"> 22.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 220 </td>
   <td style="text-align:right;"> 614145.3 </td>
   <td style="text-align:right;"> 5426159 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 7.87 </td>
   <td style="text-align:right;"> 20.6 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 80.6 </td>
   <td style="text-align:right;"> 628.0 </td>
   <td style="text-align:right;"> 25.2 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 221 </td>
   <td style="text-align:right;"> 614379.5 </td>
   <td style="text-align:right;"> 5408160 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 6.48 </td>
   <td style="text-align:right;"> 19.1 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 71.2 </td>
   <td style="text-align:right;"> 594.1 </td>
   <td style="text-align:right;"> 20.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 222 </td>
   <td style="text-align:right;"> 614615.6 </td>
   <td style="text-align:right;"> 5390161 </td>
   <td style="text-align:right;"> 1 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 6.04 </td>
   <td style="text-align:right;"> 24.4 </td>
   <td style="text-align:right;"> 2.3 </td>
   <td style="text-align:right;"> 13.2 </td>
   <td style="text-align:right;"> 123.8 </td>
   <td style="text-align:right;"> 18.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 223 </td>
   <td style="text-align:right;"> 614901.8 </td>
   <td style="text-align:right;"> 5368156 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 6.01 </td>
   <td style="text-align:right;"> 12.6 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 58.5 </td>
   <td style="text-align:right;"> 11.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 224 </td>
   <td style="text-align:right;"> 615032.0 </td>
   <td style="text-align:right;"> 5358161 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 6.22 </td>
   <td style="text-align:right;"> 21.6 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 39.4 </td>
   <td style="text-align:right;"> 121.1 </td>
   <td style="text-align:right;"> 17.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 225 </td>
   <td style="text-align:right;"> 615134.7 </td>
   <td style="text-align:right;"> 5350158 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 6.94 </td>
   <td style="text-align:right;"> 11.8 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 54.0 </td>
   <td style="text-align:right;"> 170.5 </td>
   <td style="text-align:right;"> 15.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 226 </td>
   <td style="text-align:right;"> 615265.6 </td>
   <td style="text-align:right;"> 5340157 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 5.65 </td>
   <td style="text-align:right;"> 24.2 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 12.6 </td>
   <td style="text-align:right;"> 73.3 </td>
   <td style="text-align:right;"> 8.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 227 </td>
   <td style="text-align:right;"> 613651.6 </td>
   <td style="text-align:right;"> 5310125 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 7.20 </td>
   <td style="text-align:right;"> 35.2 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 41.0 </td>
   <td style="text-align:right;"> 211.5 </td>
   <td style="text-align:right;"> 20.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 228 </td>
   <td style="text-align:right;"> 610771.0 </td>
   <td style="text-align:right;"> 5378107 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 7.67 </td>
   <td style="text-align:right;"> 61.1 </td>
   <td style="text-align:right;"> 5.4 </td>
   <td style="text-align:right;"> 46.4 </td>
   <td style="text-align:right;"> 126.6 </td>
   <td style="text-align:right;"> 54.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 229 </td>
   <td style="text-align:right;"> 611781.2 </td>
   <td style="text-align:right;"> 5300099 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 7.28 </td>
   <td style="text-align:right;"> 59.4 </td>
   <td style="text-align:right;"> 5.1 </td>
   <td style="text-align:right;"> 35.9 </td>
   <td style="text-align:right;"> 194.7 </td>
   <td style="text-align:right;"> 34.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 230 </td>
   <td style="text-align:right;"> 609424.0 </td>
   <td style="text-align:right;"> 5328078 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 6.50 </td>
   <td style="text-align:right;"> 122.1 </td>
   <td style="text-align:right;"> 9.1 </td>
   <td style="text-align:right;"> 15.9 </td>
   <td style="text-align:right;"> 94.5 </td>
   <td style="text-align:right;"> 62.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 231 </td>
   <td style="text-align:right;"> 609887.2 </td>
   <td style="text-align:right;"> 5292070 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 7.16 </td>
   <td style="text-align:right;"> 55.0 </td>
   <td style="text-align:right;"> 5.3 </td>
   <td style="text-align:right;"> 45.6 </td>
   <td style="text-align:right;"> 239.2 </td>
   <td style="text-align:right;"> 28.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 232 </td>
   <td style="text-align:right;"> 607372.7 </td>
   <td style="text-align:right;"> 5332054 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 0 </td>
   <td style="text-align:right;"> 0 </td>
   <td style="text-align:right;"> 0 </td>
   <td style="text-align:right;"> 5.14 </td>
   <td style="text-align:right;"> 251.3 </td>
   <td style="text-align:right;"> 16.8 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 78.6 </td>
   <td style="text-align:right;"> 61.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 233 </td>
   <td style="text-align:right;"> 607786.2 </td>
   <td style="text-align:right;"> 5300048 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 5.85 </td>
   <td style="text-align:right;"> 37.8 </td>
   <td style="text-align:right;"> 4.0 </td>
   <td style="text-align:right;"> 24.3 </td>
   <td style="text-align:right;"> 93.6 </td>
   <td style="text-align:right;"> 15.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 234 </td>
   <td style="text-align:right;"> 606146.5 </td>
   <td style="text-align:right;"> 5272012 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 6.32 </td>
   <td style="text-align:right;"> 42.4 </td>
   <td style="text-align:right;"> 4.4 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:right;"> 85.2 </td>
   <td style="text-align:right;"> 26.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 235 </td>
   <td style="text-align:right;"> 603582.9 </td>
   <td style="text-align:right;"> 5315999 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 6.30 </td>
   <td style="text-align:right;"> 35.7 </td>
   <td style="text-align:right;"> 3.5 </td>
   <td style="text-align:right;"> 18.7 </td>
   <td style="text-align:right;"> 178.1 </td>
   <td style="text-align:right;"> 22.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 236 </td>
   <td style="text-align:right;"> 603816.0 </td>
   <td style="text-align:right;"> 5297997 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 5.39 </td>
   <td style="text-align:right;"> 28.6 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 21.2 </td>
   <td style="text-align:right;"> 94.1 </td>
   <td style="text-align:right;"> 13.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 237 </td>
   <td style="text-align:right;"> 600973.9 </td>
   <td style="text-align:right;"> 5366005 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 55 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 7.10 </td>
   <td style="text-align:right;"> 18.2 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 61.8 </td>
   <td style="text-align:right;"> 495.1 </td>
   <td style="text-align:right;"> 17.3 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 238 </td>
   <td style="text-align:right;"> 601767.3 </td>
   <td style="text-align:right;"> 5301971 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 7.36 </td>
   <td style="text-align:right;"> 29.1 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 18.1 </td>
   <td style="text-align:right;"> 115.1 </td>
   <td style="text-align:right;"> 34.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 239 </td>
   <td style="text-align:right;"> 601997.0 </td>
   <td style="text-align:right;"> 5283966 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 6.45 </td>
   <td style="text-align:right;"> 90.7 </td>
   <td style="text-align:right;"> 8.1 </td>
   <td style="text-align:right;"> 44.5 </td>
   <td style="text-align:right;"> 134.5 </td>
   <td style="text-align:right;"> 47.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 240 </td>
   <td style="text-align:right;"> 599354.7 </td>
   <td style="text-align:right;"> 5333951 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 6.49 </td>
   <td style="text-align:right;"> 14.8 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 47.4 </td>
   <td style="text-align:right;"> 137.4 </td>
   <td style="text-align:right;"> 12.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 241 </td>
   <td style="text-align:right;"> 596628.3 </td>
   <td style="text-align:right;"> 5389928 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 7.95 </td>
   <td style="text-align:right;"> 14.7 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 30.7 </td>
   <td style="text-align:right;"> 275.8 </td>
   <td style="text-align:right;"> 15.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 242 </td>
   <td style="text-align:right;"> 597382.0 </td>
   <td style="text-align:right;"> 5331926 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 6.46 </td>
   <td style="text-align:right;"> 26.1 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 33.6 </td>
   <td style="text-align:right;"> 387.6 </td>
   <td style="text-align:right;"> 15.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 243 </td>
   <td style="text-align:right;"> 597564.0 </td>
   <td style="text-align:right;"> 5317924 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 6.05 </td>
   <td style="text-align:right;"> 32.3 </td>
   <td style="text-align:right;"> 3.4 </td>
   <td style="text-align:right;"> 14.0 </td>
   <td style="text-align:right;"> 84.9 </td>
   <td style="text-align:right;"> 17.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 244 </td>
   <td style="text-align:right;"> 595668.8 </td>
   <td style="text-align:right;"> 5309896 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 5.95 </td>
   <td style="text-align:right;"> 38.8 </td>
   <td style="text-align:right;"> 3.9 </td>
   <td style="text-align:right;"> 37.3 </td>
   <td style="text-align:right;"> 231.0 </td>
   <td style="text-align:right;"> 23.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 245 </td>
   <td style="text-align:right;"> 596131.2 </td>
   <td style="text-align:right;"> 5273889 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 6.07 </td>
   <td style="text-align:right;"> 35.2 </td>
   <td style="text-align:right;"> 3.8 </td>
   <td style="text-align:right;"> 10.6 </td>
   <td style="text-align:right;"> 74.6 </td>
   <td style="text-align:right;"> 22.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 246 </td>
   <td style="text-align:right;"> 594082.5 </td>
   <td style="text-align:right;"> 5277863 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 7.38 </td>
   <td style="text-align:right;"> 37.8 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 71.4 </td>
   <td style="text-align:right;"> 25.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 247 </td>
   <td style="text-align:right;"> 591192.3 </td>
   <td style="text-align:right;"> 5345847 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 6.32 </td>
   <td style="text-align:right;"> 6.1 </td>
   <td style="text-align:right;"> 0.8 </td>
   <td style="text-align:right;"> 10.7 </td>
   <td style="text-align:right;"> 145.1 </td>
   <td style="text-align:right;"> 7.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 248 </td>
   <td style="text-align:right;"> 591826.2 </td>
   <td style="text-align:right;"> 5297843 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 5.54 </td>
   <td style="text-align:right;"> 28.7 </td>
   <td style="text-align:right;"> 3.1 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 75.8 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 249 </td>
   <td style="text-align:right;"> 588918.8 </td>
   <td style="text-align:right;"> 5367823 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 7.53 </td>
   <td style="text-align:right;"> 32.5 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:right;"> 69.9 </td>
   <td style="text-align:right;"> 352.7 </td>
   <td style="text-align:right;"> 19.9 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 250 </td>
   <td style="text-align:right;"> 589102.2 </td>
   <td style="text-align:right;"> 5353824 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 6.45 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 31.7 </td>
   <td style="text-align:right;"> 116.6 </td>
   <td style="text-align:right;"> 10.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 251 </td>
   <td style="text-align:right;"> 589802.7 </td>
   <td style="text-align:right;"> 5299817 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 5.53 </td>
   <td style="text-align:right;"> 29.4 </td>
   <td style="text-align:right;"> 2.8 </td>
   <td style="text-align:right;"> 41.0 </td>
   <td style="text-align:right;"> 196.4 </td>
   <td style="text-align:right;"> 12.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 252 </td>
   <td style="text-align:right;"> 590085.4 </td>
   <td style="text-align:right;"> 5277812 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 6.03 </td>
   <td style="text-align:right;"> 25.4 </td>
   <td style="text-align:right;"> 2.8 </td>
   <td style="text-align:right;"> 12.8 </td>
   <td style="text-align:right;"> 214.5 </td>
   <td style="text-align:right;"> 13.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 253 </td>
   <td style="text-align:right;"> 587467.5 </td>
   <td style="text-align:right;"> 5325796 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 6.08 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 64.0 </td>
   <td style="text-align:right;"> 200.6 </td>
   <td style="text-align:right;"> 9.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 254 </td>
   <td style="text-align:right;"> 587701.4 </td>
   <td style="text-align:right;"> 5307794 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 6.33 </td>
   <td style="text-align:right;"> 43.2 </td>
   <td style="text-align:right;"> 4.2 </td>
   <td style="text-align:right;"> 25.3 </td>
   <td style="text-align:right;"> 123.7 </td>
   <td style="text-align:right;"> 26.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 255 </td>
   <td style="text-align:right;"> 576980.3 </td>
   <td style="text-align:right;"> 5363668 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 7.47 </td>
   <td style="text-align:right;"> 22.6 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 29.3 </td>
   <td style="text-align:right;"> 336.1 </td>
   <td style="text-align:right;"> 27.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 256 </td>
   <td style="text-align:right;"> 574153.8 </td>
   <td style="text-align:right;"> 5273606 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 5.34 </td>
   <td style="text-align:right;"> 30.7 </td>
   <td style="text-align:right;"> 3.4 </td>
   <td style="text-align:right;"> 69.1 </td>
   <td style="text-align:right;"> 142.8 </td>
   <td style="text-align:right;"> 10.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 257 </td>
   <td style="text-align:right;"> 566189.3 </td>
   <td style="text-align:right;"> 5271503 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 5.67 </td>
   <td style="text-align:right;"> 49.1 </td>
   <td style="text-align:right;"> 4.8 </td>
   <td style="text-align:right;"> 27.2 </td>
   <td style="text-align:right;"> 95.2 </td>
   <td style="text-align:right;"> 18.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 258 </td>
   <td style="text-align:right;"> 560168.8 </td>
   <td style="text-align:right;"> 5273426 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 5.85 </td>
   <td style="text-align:right;"> 31.4 </td>
   <td style="text-align:right;"> 3.4 </td>
   <td style="text-align:right;"> 29.4 </td>
   <td style="text-align:right;"> 71.0 </td>
   <td style="text-align:right;"> 15.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 259 </td>
   <td style="text-align:right;"> 848381.1 </td>
   <td style="text-align:right;"> 5411014 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:right;"> 6.36 </td>
   <td style="text-align:right;"> 17.8 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 12.2 </td>
   <td style="text-align:right;"> 46.0 </td>
   <td style="text-align:right;"> 7.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 260 </td>
   <td style="text-align:right;"> 840424.0 </td>
   <td style="text-align:right;"> 5406921 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 5.22 </td>
   <td style="text-align:right;"> 32.5 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 19.1 </td>
   <td style="text-align:right;"> 153.9 </td>
   <td style="text-align:right;"> 8.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 261 </td>
   <td style="text-align:right;"> 838498.1 </td>
   <td style="text-align:right;"> 5400889 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 69 </td>
   <td style="text-align:right;"> 4.73 </td>
   <td style="text-align:right;"> 27.3 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 36.8 </td>
   <td style="text-align:right;"> 88.7 </td>
   <td style="text-align:right;"> 4.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 262 </td>
   <td style="text-align:right;"> 830191.3 </td>
   <td style="text-align:right;"> 5424818 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 5.49 </td>
   <td style="text-align:right;"> 40.2 </td>
   <td style="text-align:right;"> 3.3 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 64.5 </td>
   <td style="text-align:right;"> 7.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 263 </td>
   <td style="text-align:right;"> 828515.6 </td>
   <td style="text-align:right;"> 5402761 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 5.27 </td>
   <td style="text-align:right;"> 17.9 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 80.9 </td>
   <td style="text-align:right;"> 145.3 </td>
   <td style="text-align:right;"> 8.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 264 </td>
   <td style="text-align:right;"> 826740.9 </td>
   <td style="text-align:right;"> 5380728 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 77 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 5.36 </td>
   <td style="text-align:right;"> 17.0 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 60.4 </td>
   <td style="text-align:right;"> 8.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 265 </td>
   <td style="text-align:right;"> 822412.6 </td>
   <td style="text-align:right;"> 5406711 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 76 </td>
   <td style="text-align:right;"> 5.79 </td>
   <td style="text-align:right;"> 21.9 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 28.5 </td>
   <td style="text-align:right;"> 145.2 </td>
   <td style="text-align:right;"> 7.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 266 </td>
   <td style="text-align:right;"> 822864.0 </td>
   <td style="text-align:right;"> 5370676 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 6.80 </td>
   <td style="text-align:right;"> 15.5 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 66.6 </td>
   <td style="text-align:right;"> 157.8 </td>
   <td style="text-align:right;"> 11.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 267 </td>
   <td style="text-align:right;"> 818233.3 </td>
   <td style="text-align:right;"> 5420675 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 5.67 </td>
   <td style="text-align:right;"> 26.9 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 28.9 </td>
   <td style="text-align:right;"> 64.0 </td>
   <td style="text-align:right;"> 7.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 268 </td>
   <td style="text-align:right;"> 816705.3 </td>
   <td style="text-align:right;"> 5382628 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 7.27 </td>
   <td style="text-align:right;"> 16.3 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 61.8 </td>
   <td style="text-align:right;"> 102.7 </td>
   <td style="text-align:right;"> 21.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 269 </td>
   <td style="text-align:right;"> 812859.8 </td>
   <td style="text-align:right;"> 5370547 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 6.08 </td>
   <td style="text-align:right;"> 14.9 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 65.4 </td>
   <td style="text-align:right;"> 246.8 </td>
   <td style="text-align:right;"> 8.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 270 </td>
   <td style="text-align:right;"> 812996.4 </td>
   <td style="text-align:right;"> 5360528 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 6.95 </td>
   <td style="text-align:right;"> 19.1 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 36.5 </td>
   <td style="text-align:right;"> 141.5 </td>
   <td style="text-align:right;"> 12.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 271 </td>
   <td style="text-align:right;"> 808400.9 </td>
   <td style="text-align:right;"> 5406547 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 73 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 6.38 </td>
   <td style="text-align:right;"> 23.6 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 28.1 </td>
   <td style="text-align:right;"> 386.7 </td>
   <td style="text-align:right;"> 10.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 272 </td>
   <td style="text-align:right;"> 804869.5 </td>
   <td style="text-align:right;"> 5370467 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 7.37 </td>
   <td style="text-align:right;"> 18.9 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 80.6 </td>
   <td style="text-align:right;"> 223.5 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 273 </td>
   <td style="text-align:right;"> 802478.3 </td>
   <td style="text-align:right;"> 5400470 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 7.55 </td>
   <td style="text-align:right;"> 33.1 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 54.2 </td>
   <td style="text-align:right;"> 145.7 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 274 </td>
   <td style="text-align:right;"> 800660.1 </td>
   <td style="text-align:right;"> 5384422 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 7.00 </td>
   <td style="text-align:right;"> 10.8 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 40.4 </td>
   <td style="text-align:right;"> 276.1 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 275 </td>
   <td style="text-align:right;"> 801013.0 </td>
   <td style="text-align:right;"> 5366354 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 6.80 </td>
   <td style="text-align:right;"> 27.8 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 96.6 </td>
   <td style="text-align:right;"> 442.7 </td>
   <td style="text-align:right;"> 21.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 276 </td>
   <td style="text-align:right;"> 798245.9 </td>
   <td style="text-align:right;"> 5418439 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 4.37 </td>
   <td style="text-align:right;"> 32.4 </td>
   <td style="text-align:right;"> 3.1 </td>
   <td style="text-align:right;"> 16.4 </td>
   <td style="text-align:right;"> 62.4 </td>
   <td style="text-align:right;"> 4.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 277 </td>
   <td style="text-align:right;"> 798423.6 </td>
   <td style="text-align:right;"> 5404427 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 7.55 </td>
   <td style="text-align:right;"> 41.9 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 113.6 </td>
   <td style="text-align:right;"> 88.0 </td>
   <td style="text-align:right;"> 29.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 278 </td>
   <td style="text-align:right;"> 798878.6 </td>
   <td style="text-align:right;"> 5368397 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 5.43 </td>
   <td style="text-align:right;"> 27.7 </td>
   <td style="text-align:right;"> 2.8 </td>
   <td style="text-align:right;"> 12.0 </td>
   <td style="text-align:right;"> 53.5 </td>
   <td style="text-align:right;"> 10.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 279 </td>
   <td style="text-align:right;"> 796373.0 </td>
   <td style="text-align:right;"> 5408407 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 7.55 </td>
   <td style="text-align:right;"> 28.8 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 39.8 </td>
   <td style="text-align:right;"> 129.3 </td>
   <td style="text-align:right;"> 15.7 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 280 </td>
   <td style="text-align:right;"> 794550.6 </td>
   <td style="text-align:right;"> 5396423 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 70 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 7.94 </td>
   <td style="text-align:right;"> 9.0 </td>
   <td style="text-align:right;"> 1.0 </td>
   <td style="text-align:right;"> 45.2 </td>
   <td style="text-align:right;"> 119.2 </td>
   <td style="text-align:right;"> 16.8 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 281 </td>
   <td style="text-align:right;"> 794750.8 </td>
   <td style="text-align:right;"> 5378335 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 5.78 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 49.7 </td>
   <td style="text-align:right;"> 210.4 </td>
   <td style="text-align:right;"> 6.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 282 </td>
   <td style="text-align:right;"> 784293.6 </td>
   <td style="text-align:right;"> 5414267 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 76 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 7.27 </td>
   <td style="text-align:right;"> 10.5 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 66.9 </td>
   <td style="text-align:right;"> 352.4 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 283 </td>
   <td style="text-align:right;"> 784909.1 </td>
   <td style="text-align:right;"> 5364222 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 5.63 </td>
   <td style="text-align:right;"> 17.3 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 15.5 </td>
   <td style="text-align:right;"> 91.9 </td>
   <td style="text-align:right;"> 9.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 284 </td>
   <td style="text-align:right;"> 778369.1 </td>
   <td style="text-align:right;"> 5408191 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 7.78 </td>
   <td style="text-align:right;"> 18.1 </td>
   <td style="text-align:right;"> 1.6 </td>
   <td style="text-align:right;"> 101.2 </td>
   <td style="text-align:right;"> 375.1 </td>
   <td style="text-align:right;"> 15.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 285 </td>
   <td style="text-align:right;"> 774212.3 </td>
   <td style="text-align:right;"> 5420157 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 7.63 </td>
   <td style="text-align:right;"> 15.1 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 103.9 </td>
   <td style="text-align:right;"> 378.8 </td>
   <td style="text-align:right;"> 14.7 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 286 </td>
   <td style="text-align:right;"> 774622.5 </td>
   <td style="text-align:right;"> 5384144 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 6.23 </td>
   <td style="text-align:right;"> 16.3 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 29.4 </td>
   <td style="text-align:right;"> 118.8 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 287 </td>
   <td style="text-align:right;"> 774899.2 </td>
   <td style="text-align:right;"> 5366121 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 6.40 </td>
   <td style="text-align:right;"> 16.2 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 54.3 </td>
   <td style="text-align:right;"> 241.1 </td>
   <td style="text-align:right;"> 10.7 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 288 </td>
   <td style="text-align:right;"> 772025.9 </td>
   <td style="text-align:right;"> 5434135 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 5.83 </td>
   <td style="text-align:right;"> 15.3 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 91.2 </td>
   <td style="text-align:right;"> 206.0 </td>
   <td style="text-align:right;"> 10.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 289 </td>
   <td style="text-align:right;"> 772505.3 </td>
   <td style="text-align:right;"> 5392106 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 54 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 7.90 </td>
   <td style="text-align:right;"> 21.2 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 50.9 </td>
   <td style="text-align:right;"> 381.3 </td>
   <td style="text-align:right;"> 22.9 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 290 </td>
   <td style="text-align:right;"> 772850.0 </td>
   <td style="text-align:right;"> 5370093 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 5.71 </td>
   <td style="text-align:right;"> 13.0 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 15.8 </td>
   <td style="text-align:right;"> 65.1 </td>
   <td style="text-align:right;"> 8.0 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 291 </td>
   <td style="text-align:right;"> 770440.8 </td>
   <td style="text-align:right;"> 5402094 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 59 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 7.81 </td>
   <td style="text-align:right;"> 17.1 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 67.8 </td>
   <td style="text-align:right;"> 283.4 </td>
   <td style="text-align:right;"> 17.6 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 292 </td>
   <td style="text-align:right;"> 770567.5 </td>
   <td style="text-align:right;"> 5390130 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 7.03 </td>
   <td style="text-align:right;"> 13.8 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 88.3 </td>
   <td style="text-align:right;"> 274.0 </td>
   <td style="text-align:right;"> 17.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 293 </td>
   <td style="text-align:right;"> 768578.6 </td>
   <td style="text-align:right;"> 5406123 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 62 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 7.68 </td>
   <td style="text-align:right;"> 17.7 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 89.2 </td>
   <td style="text-align:right;"> 313.7 </td>
   <td style="text-align:right;"> 22.7 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 294 </td>
   <td style="text-align:right;"> 768797.3 </td>
   <td style="text-align:right;"> 5374050 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 6.55 </td>
   <td style="text-align:right;"> 20.2 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 64.8 </td>
   <td style="text-align:right;"> 321.1 </td>
   <td style="text-align:right;"> 22.3 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 295 </td>
   <td style="text-align:right;"> 760132.9 </td>
   <td style="text-align:right;"> 5425983 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 70 </td>
   <td style="text-align:right;"> 7.36 </td>
   <td style="text-align:right;"> 12.4 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 67.8 </td>
   <td style="text-align:right;"> 150.7 </td>
   <td style="text-align:right;"> 7.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 296 </td>
   <td style="text-align:right;"> 758157.4 </td>
   <td style="text-align:right;"> 5423962 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 7.38 </td>
   <td style="text-align:right;"> 45.1 </td>
   <td style="text-align:right;"> 3.1 </td>
   <td style="text-align:right;"> 15.9 </td>
   <td style="text-align:right;"> 56.8 </td>
   <td style="text-align:right;"> 21.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 297 </td>
   <td style="text-align:right;"> 758515.3 </td>
   <td style="text-align:right;"> 5395946 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 16 </td>
   <td style="text-align:right;"> 7.23 </td>
   <td style="text-align:right;"> 148.1 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:right;"> 52.6 </td>
   <td style="text-align:right;"> 260.9 </td>
   <td style="text-align:right;"> 83.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 298 </td>
   <td style="text-align:right;"> 754333.2 </td>
   <td style="text-align:right;"> 5409896 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 6.94 </td>
   <td style="text-align:right;"> 13.5 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 78.7 </td>
   <td style="text-align:right;"> 384.1 </td>
   <td style="text-align:right;"> 12.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 299 </td>
   <td style="text-align:right;"> 754614.6 </td>
   <td style="text-align:right;"> 5387893 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 73 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 6.93 </td>
   <td style="text-align:right;"> 15.0 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 50.6 </td>
   <td style="text-align:right;"> 285.4 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 300 </td>
   <td style="text-align:right;"> 744998.1 </td>
   <td style="text-align:right;"> 5357759 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 7.17 </td>
   <td style="text-align:right;"> 21.3 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 68.9 </td>
   <td style="text-align:right;"> 64.1 </td>
   <td style="text-align:right;"> 18.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 301 </td>
   <td style="text-align:right;"> 740384.7 </td>
   <td style="text-align:right;"> 5405734 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 7.26 </td>
   <td style="text-align:right;"> 16.5 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 54.0 </td>
   <td style="text-align:right;"> 314.0 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 302 </td>
   <td style="text-align:right;"> 738436.8 </td>
   <td style="text-align:right;"> 5401710 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 7.37 </td>
   <td style="text-align:right;"> 18.9 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 42.3 </td>
   <td style="text-align:right;"> 235.3 </td>
   <td style="text-align:right;"> 18.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 303 </td>
   <td style="text-align:right;"> 736615.8 </td>
   <td style="text-align:right;"> 5387675 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 7.83 </td>
   <td style="text-align:right;"> 35.1 </td>
   <td style="text-align:right;"> 3.2 </td>
   <td style="text-align:right;"> 33.0 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 32.7 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 304 </td>
   <td style="text-align:right;"> 734362.7 </td>
   <td style="text-align:right;"> 5407662 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 33 </td>
   <td style="text-align:right;"> 39 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 5.62 </td>
   <td style="text-align:right;"> 17.4 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 42.0 </td>
   <td style="text-align:right;"> 255.7 </td>
   <td style="text-align:right;"> 21.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 305 </td>
   <td style="text-align:right;"> 732822.5 </td>
   <td style="text-align:right;"> 5369684 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 6.61 </td>
   <td style="text-align:right;"> 11.9 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 38.2 </td>
   <td style="text-align:right;"> 202.9 </td>
   <td style="text-align:right;"> 16.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 306 </td>
   <td style="text-align:right;"> 728437.5 </td>
   <td style="text-align:right;"> 5401587 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 6.96 </td>
   <td style="text-align:right;"> 19.3 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 78.2 </td>
   <td style="text-align:right;"> 353.2 </td>
   <td style="text-align:right;"> 18.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 307 </td>
   <td style="text-align:right;"> 728593.1 </td>
   <td style="text-align:right;"> 5389584 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 7.77 </td>
   <td style="text-align:right;"> 14.8 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 73.5 </td>
   <td style="text-align:right;"> 344.9 </td>
   <td style="text-align:right;"> 18.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 308 </td>
   <td style="text-align:right;"> 724132.0 </td>
   <td style="text-align:right;"> 5425551 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 7.09 </td>
   <td style="text-align:right;"> 12.9 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 50.2 </td>
   <td style="text-align:right;"> 16.6 </td>
   <td style="text-align:right;"> 17.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 309 </td>
   <td style="text-align:right;"> 720668.9 </td>
   <td style="text-align:right;"> 5383481 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 7.53 </td>
   <td style="text-align:right;"> 11.0 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 35.9 </td>
   <td style="text-align:right;"> 198.1 </td>
   <td style="text-align:right;"> 19.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 310 </td>
   <td style="text-align:right;"> 718258.2 </td>
   <td style="text-align:right;"> 5415470 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 7.74 </td>
   <td style="text-align:right;"> 14.5 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 72.6 </td>
   <td style="text-align:right;"> 334.2 </td>
   <td style="text-align:right;"> 18.2 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 311 </td>
   <td style="text-align:right;"> 714389.3 </td>
   <td style="text-align:right;"> 5405419 </td>
   <td style="text-align:right;"> 2 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 61 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 7.65 </td>
   <td style="text-align:right;"> 13.8 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 57.3 </td>
   <td style="text-align:right;"> 218.9 </td>
   <td style="text-align:right;"> 19.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 312 </td>
   <td style="text-align:right;"> 714567.8 </td>
   <td style="text-align:right;"> 5391413 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 21 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 15 </td>
   <td style="text-align:right;"> 7.56 </td>
   <td style="text-align:right;"> 17.6 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 90.8 </td>
   <td style="text-align:right;"> 231.9 </td>
   <td style="text-align:right;"> 17.4 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 313 </td>
   <td style="text-align:right;"> 710259.3 </td>
   <td style="text-align:right;"> 5415358 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 7.51 </td>
   <td style="text-align:right;"> 10.9 </td>
   <td style="text-align:right;"> 1.2 </td>
   <td style="text-align:right;"> 67.5 </td>
   <td style="text-align:right;"> 203.5 </td>
   <td style="text-align:right;"> 15.1 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 314 </td>
   <td style="text-align:right;"> 679435.2 </td>
   <td style="text-align:right;"> 5479005 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 60 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 6.25 </td>
   <td style="text-align:right;"> 25.2 </td>
   <td style="text-align:right;"> 2.5 </td>
   <td style="text-align:right;"> 10.3 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 14.3 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 315 </td>
   <td style="text-align:right;"> 667413.9 </td>
   <td style="text-align:right;"> 5480857 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 5.73 </td>
   <td style="text-align:right;"> 44.0 </td>
   <td style="text-align:right;"> 4.2 </td>
   <td style="text-align:right;"> 17.5 </td>
   <td style="text-align:right;"> 133.2 </td>
   <td style="text-align:right;"> 26.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 316 </td>
   <td style="text-align:right;"> 667830.4 </td>
   <td style="text-align:right;"> 5448853 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 32 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 7.21 </td>
   <td style="text-align:right;"> 22.0 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 64.5 </td>
   <td style="text-align:right;"> 583.4 </td>
   <td style="text-align:right;"> 22.2 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 317 </td>
   <td style="text-align:right;"> 661991.6 </td>
   <td style="text-align:right;"> 5436765 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 7.15 </td>
   <td style="text-align:right;"> 18.7 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 83.7 </td>
   <td style="text-align:right;"> 614.5 </td>
   <td style="text-align:right;"> 21.1 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 318 </td>
   <td style="text-align:right;"> 655285.1 </td>
   <td style="text-align:right;"> 5490700 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 86 </td>
   <td style="text-align:right;"> 5.63 </td>
   <td style="text-align:right;"> 7.8 </td>
   <td style="text-align:right;"> 0.7 </td>
   <td style="text-align:right;"> 45.7 </td>
   <td style="text-align:right;"> 82.7 </td>
   <td style="text-align:right;"> 5.1 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 319 </td>
   <td style="text-align:right;"> 655914.0 </td>
   <td style="text-align:right;"> 5442699 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 7.01 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 28.1 </td>
   <td style="text-align:right;"> 183.2 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 320 </td>
   <td style="text-align:right;"> 649942.5 </td>
   <td style="text-align:right;"> 5440626 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 14 </td>
   <td style="text-align:right;"> 6.40 </td>
   <td style="text-align:right;"> 26.3 </td>
   <td style="text-align:right;"> 2.7 </td>
   <td style="text-align:right;"> 37.4 </td>
   <td style="text-align:right;"> 257.7 </td>
   <td style="text-align:right;"> 21.5 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 321 </td>
   <td style="text-align:right;"> 644155.2 </td>
   <td style="text-align:right;"> 5424548 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 5.92 </td>
   <td style="text-align:right;"> 16.3 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 55.8 </td>
   <td style="text-align:right;"> 191.1 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 322 </td>
   <td style="text-align:right;"> 640078.4 </td>
   <td style="text-align:right;"> 5430493 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 7.72 </td>
   <td style="text-align:right;"> 19.8 </td>
   <td style="text-align:right;"> 2.1 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 264.4 </td>
   <td style="text-align:right;"> 24.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 323 </td>
   <td style="text-align:right;"> 637333.6 </td>
   <td style="text-align:right;"> 5486472 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 6.92 </td>
   <td style="text-align:right;"> 13.8 </td>
   <td style="text-align:right;"> 1.3 </td>
   <td style="text-align:right;"> 54.1 </td>
   <td style="text-align:right;"> 265.3 </td>
   <td style="text-align:right;"> 9.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 324 </td>
   <td style="text-align:right;"> 637448.9 </td>
   <td style="text-align:right;"> 5478465 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 28 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 6.39 </td>
   <td style="text-align:right;"> 19.3 </td>
   <td style="text-align:right;"> 2.0 </td>
   <td style="text-align:right;"> 21.2 </td>
   <td style="text-align:right;"> 47.7 </td>
   <td style="text-align:right;"> 11.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 325 </td>
   <td style="text-align:right;"> 638188.8 </td>
   <td style="text-align:right;"> 5424477 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 5.86 </td>
   <td style="text-align:right;"> 19.2 </td>
   <td style="text-align:right;"> 2.2 </td>
   <td style="text-align:right;"> 21.6 </td>
   <td style="text-align:right;"> 80.6 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 326 </td>
   <td style="text-align:right;"> 635792.1 </td>
   <td style="text-align:right;"> 5452444 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 10 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 64 </td>
   <td style="text-align:right;"> 5.36 </td>
   <td style="text-align:right;"> 9.4 </td>
   <td style="text-align:right;"> 0.8 </td>
   <td style="text-align:right;"> 95.6 </td>
   <td style="text-align:right;"> 116.5 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 327 </td>
   <td style="text-align:right;"> 631951.7 </td>
   <td style="text-align:right;"> 5440391 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 27 </td>
   <td style="text-align:right;"> 7.41 </td>
   <td style="text-align:right;"> 26.8 </td>
   <td style="text-align:right;"> 2.4 </td>
   <td style="text-align:right;"> 34.3 </td>
   <td style="text-align:right;"> 346.0 </td>
   <td style="text-align:right;"> 21.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 328 </td>
   <td style="text-align:right;"> 629056.9 </td>
   <td style="text-align:right;"> 5508361 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 29 </td>
   <td style="text-align:right;"> 6.71 </td>
   <td style="text-align:right;"> 11.0 </td>
   <td style="text-align:right;"> 1.2 </td>
   <td style="text-align:right;"> 16.1 </td>
   <td style="text-align:right;"> 246.6 </td>
   <td style="text-align:right;"> 11.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 329 </td>
   <td style="text-align:right;"> 630005.1 </td>
   <td style="text-align:right;"> 5436366 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 30 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 17 </td>
   <td style="text-align:right;"> 5.90 </td>
   <td style="text-align:right;"> 16.7 </td>
   <td style="text-align:right;"> 1.9 </td>
   <td style="text-align:right;"> 15.6 </td>
   <td style="text-align:right;"> 146.0 </td>
   <td style="text-align:right;"> 14.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 330 </td>
   <td style="text-align:right;"> 627666.1 </td>
   <td style="text-align:right;"> 5462337 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:right;"> 6.68 </td>
   <td style="text-align:right;"> 34.6 </td>
   <td style="text-align:right;"> 3.5 </td>
   <td style="text-align:right;"> 45.7 </td>
   <td style="text-align:right;"> 106.0 </td>
   <td style="text-align:right;"> 21.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 331 </td>
   <td style="text-align:right;"> 625455.2 </td>
   <td style="text-align:right;"> 5478313 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 25 </td>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:right;"> 6.91 </td>
   <td style="text-align:right;"> 38.1 </td>
   <td style="text-align:right;"> 3.7 </td>
   <td style="text-align:right;"> 24.1 </td>
   <td style="text-align:right;"> 148.7 </td>
   <td style="text-align:right;"> 24.5 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 332 </td>
   <td style="text-align:right;"> 625535.5 </td>
   <td style="text-align:right;"> 5472313 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 67 </td>
   <td style="text-align:right;"> 7.14 </td>
   <td style="text-align:right;"> 13.6 </td>
   <td style="text-align:right;"> 1.7 </td>
   <td style="text-align:right;"> 63.8 </td>
   <td style="text-align:right;"> 388.3 </td>
   <td style="text-align:right;"> 9.4 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 333 </td>
   <td style="text-align:right;"> 625771.4 </td>
   <td style="text-align:right;"> 5454315 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 63 </td>
   <td style="text-align:right;"> 7.49 </td>
   <td style="text-align:right;"> 6.0 </td>
   <td style="text-align:right;"> 0.7 </td>
   <td style="text-align:right;"> 60.5 </td>
   <td style="text-align:right;"> 198.0 </td>
   <td style="text-align:right;"> 9.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 334 </td>
   <td style="text-align:right;"> 626008.8 </td>
   <td style="text-align:right;"> 5436316 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 6.50 </td>
   <td style="text-align:right;"> 30.8 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 156.4 </td>
   <td style="text-align:right;"> 24.9 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 335 </td>
   <td style="text-align:right;"> 617326.8 </td>
   <td style="text-align:right;"> 5488205 </td>
   <td style="text-align:right;"> 6 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 22 </td>
   <td style="text-align:right;"> 56 </td>
   <td style="text-align:right;"> 6.01 </td>
   <td style="text-align:right;"> 13.8 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 28.3 </td>
   <td style="text-align:right;"> 126.7 </td>
   <td style="text-align:right;"> 10.4 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 336 </td>
   <td style="text-align:right;"> 615225.9 </td>
   <td style="text-align:right;"> 5496179 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 31 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 7.45 </td>
   <td style="text-align:right;"> 28.0 </td>
   <td style="text-align:right;"> 2.9 </td>
   <td style="text-align:right;"> 27.6 </td>
   <td style="text-align:right;"> 133.5 </td>
   <td style="text-align:right;"> 23.9 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 337 </td>
   <td style="text-align:right;"> 611225.1 </td>
   <td style="text-align:right;"> 5496124 </td>
   <td style="text-align:right;"> 8 </td>
   <td style="text-align:right;"> 9 </td>
   <td style="text-align:right;"> 24 </td>
   <td style="text-align:right;"> 68 </td>
   <td style="text-align:right;"> 7.60 </td>
   <td style="text-align:right;"> 11.7 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 101.4 </td>
   <td style="text-align:right;"> 232.3 </td>
   <td style="text-align:right;"> 12.3 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 338 </td>
   <td style="text-align:right;"> 607545.4 </td>
   <td style="text-align:right;"> 5472076 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 37 </td>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:right;"> 6.24 </td>
   <td style="text-align:right;"> 12.5 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 64.9 </td>
   <td style="text-align:right;"> 308.4 </td>
   <td style="text-align:right;"> 9.2 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 339 </td>
   <td style="text-align:right;"> 605729.7 </td>
   <td style="text-align:right;"> 5458054 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 6.50 </td>
   <td style="text-align:right;"> 53.3 </td>
   <td style="text-align:right;"> 5.9 </td>
   <td style="text-align:right;"> 0.0 </td>
   <td style="text-align:right;"> 269.8 </td>
   <td style="text-align:right;"> 54.8 </td>
   <td style="text-align:left;"> acidic </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 340 </td>
   <td style="text-align:right;"> 599414.6 </td>
   <td style="text-align:right;"> 5481971 </td>
   <td style="text-align:right;"> 26 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 5 </td>
   <td style="text-align:right;"> 7.12 </td>
   <td style="text-align:right;"> 45.2 </td>
   <td style="text-align:right;"> 4.5 </td>
   <td style="text-align:right;"> 28.0 </td>
   <td style="text-align:right;"> 258.2 </td>
   <td style="text-align:right;"> 37.6 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 341 </td>
   <td style="text-align:right;"> 599577.1 </td>
   <td style="text-align:right;"> 5469973 </td>
   <td style="text-align:right;"> 13 </td>
   <td style="text-align:right;"> 23 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:right;"> 7.05 </td>
   <td style="text-align:right;"> 14.5 </td>
   <td style="text-align:right;"> 1.5 </td>
   <td style="text-align:right;"> 32.9 </td>
   <td style="text-align:right;"> 263.9 </td>
   <td style="text-align:right;"> 13.7 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 342 </td>
   <td style="text-align:right;"> 595869.6 </td>
   <td style="text-align:right;"> 5447893 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 20 </td>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:right;"> 35 </td>
   <td style="text-align:right;"> 7.46 </td>
   <td style="text-align:right;"> 10.1 </td>
   <td style="text-align:right;"> 1.1 </td>
   <td style="text-align:right;"> 19.3 </td>
   <td style="text-align:right;"> 120.8 </td>
   <td style="text-align:right;"> 13.0 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 343 </td>
   <td style="text-align:right;"> 591368.8 </td>
   <td style="text-align:right;"> 5485864 </td>
   <td style="text-align:right;"> 3 </td>
   <td style="text-align:right;"> 19 </td>
   <td style="text-align:right;"> 74 </td>
   <td style="text-align:right;"> 7 </td>
   <td style="text-align:right;"> 7.91 </td>
   <td style="text-align:right;"> 11.4 </td>
   <td style="text-align:right;"> 1.4 </td>
   <td style="text-align:right;"> 26.3 </td>
   <td style="text-align:right;"> 161.7 </td>
   <td style="text-align:right;"> 16.0 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 344 </td>
   <td style="text-align:right;"> 585398.3 </td>
   <td style="text-align:right;"> 5483786 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 34 </td>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:right;"> 18 </td>
   <td style="text-align:right;"> 7.73 </td>
   <td style="text-align:right;"> 16.8 </td>
   <td style="text-align:right;"> 1.8 </td>
   <td style="text-align:right;"> 46.6 </td>
   <td style="text-align:right;"> 328.1 </td>
   <td style="text-align:right;"> 22.8 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 345 </td>
   <td style="text-align:right;"> 583374.3 </td>
   <td style="text-align:right;"> 5485761 </td>
   <td style="text-align:right;"> 12 </td>
   <td style="text-align:right;"> 38 </td>
   <td style="text-align:right;"> 58 </td>
   <td style="text-align:right;"> 4 </td>
   <td style="text-align:right;"> 7.50 </td>
   <td style="text-align:right;"> 37.3 </td>
   <td style="text-align:right;"> 3.5 </td>
   <td style="text-align:right;"> 13.3 </td>
   <td style="text-align:right;"> 185.8 </td>
   <td style="text-align:right;"> 40.7 </td>
   <td style="text-align:left;"> alkaline </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 346 </td>
   <td style="text-align:right;"> 581586.1 </td>
   <td style="text-align:right;"> 5469739 </td>
   <td style="text-align:right;"> 0 </td>
   <td style="text-align:right;"> 36 </td>
   <td style="text-align:right;"> 53 </td>
   <td style="text-align:right;"> 11 </td>
   <td style="text-align:right;"> 7.30 </td>
   <td style="text-align:right;"> 29.4 </td>
   <td style="text-align:right;"> 3.0 </td>
   <td style="text-align:right;"> 15.2 </td>
   <td style="text-align:right;"> 527.2 </td>
   <td style="text-align:right;"> 24.8 </td>
   <td style="text-align:left;"> neutral </td>
  </tr>
</tbody>
</table></div>


#### don't forget!

<img src="images/file_different_folder.png" alt="drawing" width="200"/>

### Writing data `write.table()`

R also allows to export our output/results in different formats:


```r
write.table(soil_data, file = "output/this_is_a_copy_of_soil_data_made_with_R.csv", sep = ",",
            row.names = FALSE, col.names = TRUE)
```
## Statistical evaluation

When we work with data, is important to describe our data to understand it better. There are a wide variety of statistics used to describe or summarize data in terms of central tendency, shape, position, etc.


```r
# We separate only two properties to make easier to work with them
pH <- soil_data$pH
OC <- soil_data$OC
N <- soil_data$N

# and we also create a data.frame with those 3 variables (only for easy handling)
data <- as.data.frame(cbind(pH, OC, N))
```
### Descriptive statistics

```r
mean(pH)
```

```
## [1] 6.738237
```

```r
median(pH)
```

```
## [1] 6.85
```

```r
min(pH)
```

```
## [1] 3.81
```

```r
max(pH)
```

```
## [1] 8.14
```

```r
range(pH)
```

```
## [1] 3.81 8.14
```

```r
sd(pH)
```

```
## [1] 0.7908862
```

```r
quantile(pH)
```

```
##     0%    25%    50%    75%   100% 
## 3.8100 6.1625 6.8500 7.3800 8.1400
```

```r
summary(pH)
```

```
##    Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
##   3.810   6.162   6.850   6.738   7.380   8.140
```

```r
# For factors, is interesting to describe how many observations belong to each category

pH_class_count <- as.data.frame(table(soil_data$pH_class))

pH_class_count
```

```
##       Var1 Freq
## 1   acidic  140
## 2 alkaline   67
## 3  neutral  139
```

some functions are not included in base R, but implemented via packages. E.g. `moments`


```r
library(moments)
skewness(pH)
```

```
## [1] -0.4164928
```
Skewness indicates if our data distribution is symmetric or not:

![](images/Negative_and_positive_skewness_diagrams.svg)


```r
kurtosis(pH)
```

```
## [1] 2.619499
```
Kurtosis describe is how long is the tail of our data distribution:

![](images/kurtosis.jpg)

### Correlation

Pearson correlation coefficient `cor()`

$$
{r_{xy}=\frac{\sum_{i = 1}^{n}(x_i-\overline{x})(y_{i}-\overline{y})}{\sqrt{\sum_{i = 1}^{n}(x_{i}-\overline{x})^2}{\sqrt{\sum_{i = 1}^{n}(y_{i}-\overline{y})^2}}}}
$$

where:

-   `$$n$$` is sample size
-   `$$X_{i}$$`, `$$Y_{i}$$` are the individual sample points indexed with `$$i$$`
-   `$$\overline{x} = \frac{1}{n}\sum_{x = 1}^{n} x_{i}$$` (the sample mean);

and analogously for `$${\bar {y}}$$`

Examples:

![](images/Correlation_examples2.svg.png)

So now with our data...


```r
cor(OC, N)
```

```
## [1] 0.9705
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-15-1.png" width="672" />

[Spurious correlations](http://tylervigen.com/spurious-correlations)

### Linear regression `lm()`

in R, the linear models are written as `lm(y ~ x, data)`

Example:



```r
linearModel <- lm(OC ~ N , data = data)
summary(linearModel)
```

```
## 
## Call:
## lm(formula = OC ~ N, data = data)
## 
## Residuals:
##     Min      1Q  Median      3Q     Max 
## -27.003  -2.030  -0.056   1.587  45.320 
## 
## Coefficients:
##             Estimate Std. Error t value Pr(>|t|)    
## (Intercept)  -5.4002     0.5552  -9.726   <2e-16 ***
## N            12.5904     0.1686  74.658   <2e-16 ***
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 5.997 on 344 degrees of freedom
## Multiple R-squared:  0.9419,	Adjusted R-squared:  0.9417 
## F-statistic:  5574 on 1 and 344 DF,  p-value: < 2.2e-16
```
<details><summary>Some more functions for the curious ones</summary>



```r
plot(linearModel)
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-17-1.png" width="672" /><img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-17-2.png" width="672" /><img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-17-3.png" width="672" /><img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-17-4.png" width="672" />
When running this command, we obtain a set of 4 plots that are out of the scope of this "introduction", but:

+   **Residuals vs Fitted **: The residuals are distributed following a systematic pattern around the value 0, indicating that the *linear* regression is not the best. The residuals are also more concentrated in the center, while towards the extremes they show less dispersion, which could indicate heterogeneity among the error variances (heteroscedasticity). Some residuals stand out, indicating the possible presence of outliers.
+   **Normal Q-Q**: It compares a theoretical normal distribution with the residuals of our model. It should show a straight line for normality assumption and should not show systematic pasterns (should be randomly distributed around that straight line).
+   **Scale-location**: it shows if residuals are spread equally along the ranges of predictors. This is how you can check the assumption of equal variance (homoscedasticity). It’s good if you see a horizontal line with equally (randomly) spread points.
+   **Residuals vs leverage**: Unlike the other plots, this time the patterns are not relevant. We look for outlying values in the upper or lower right corner. These places are where cases with a large weight in the linear regression can be located. Look for cases outside the dotted lines, which means they have high Cook's distance values.

This is just a visual check, not an air-tight proof, so it is somewhat subjective. But it allows us to see at-a-glance if our assumption is plausible, and if not, how the assumption is violated and what data points contribute to the violation.

Source: [Understanding Diagnostic Plots for Linear Regression Analysis](https://data.library.virginia.edu/diagnostic-plots/#:~:text=Scale%2DLocation,equally%20(randomly)%20spread%20points.)
</details>

### Coefficient of determination with Pearson correlation coefficient `cor()`

$$
R^2≡1-\frac{\sum(y_{i}-\hat{y_{i}})^2}{\sum(y_{i}-\overline{y})^2}
$$

$$
R^2=r×r
$$


```r
cor(OC, linearModel$fitted.values) * cor(OC, linearModel$fitted.values)
```

```
## [1] 0.9418703
```

### root mean squared error (RMSE)


$$
RMSE=\sqrt{\frac{1}{n}\sum_{i = 1}^{n}{(\hat{y_{i}}-y_{i})^2}}
$$



```r
sqrt(1 / length(rbind(linearModel$residuals)) * sum(rbind(linearModel$residuals) ^ 2))
```

```
## [1] 5.980082
```
### Function for the root mean squared error (RMSE)

Base R does not include a function for RMSE in base R, but in R we can create custom functions as follows:


```r
function_name <- function(input_x, input_y, ...) {
  some_operations
}
```

Let\'s create our own RMSE function: 


```r
rmse <- function(x, y) {
  sqrt(mean((x - y) ^ 2))
}
```

Requires input


```r
rmse(linearModel$fitted.values, OC)
```

```
## [1] 5.980082
```
## Visualization with plots

[The R Graph Gallery](https://www.r-graph-gallery.com/index.html)

### Boxplots `boxplot()`


```r
boxplot(pH, N, names = c("pH value", "N [%]"), ylab = "pH in water and N")
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-23-1.png" width="672" />

+   Data to be displayed: pH and Corg
+   Labeling of the x-axis: names = c("pH value", "N [%]").
+   Labeling of the y-axis: ylab = "pH in water and N".

What does the boxplot show?

### Histograms `hist()`


```r
hist(pH,
     xlab = "pH value", 
     ylab = "Frequency", 
     main = ""
     )
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-24-1.png" width="672" />

### Density plots `plot(density()`


```r
plot(density(pH),
     xlab = "pH value",
     ylab = "Frequency", 
     main = ""
     )
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-25-1.png" width="672" />

### Scatterplots `plot(x, y)`


```r
plot(N, 
     OC, 
     xlab = "OC [%]",
     ylab = "N [%]"
     )
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-26-1.png" width="672" />

### Design options

Directly in the graphic routines (help with `?par`)

+   Set colors with `col = ...`
+   Set symbol properties with `pch = ...`, sizes with `cex = ...`
+   Set title with `main = ...`, axis label with `xlab = ...`, `ylab = ...`
+   Set drawing area with `xlim = ...`, `ylim = ...`

After drawing a graphic

+   Complete lines and points with `lines(...)` or `points(...)` respectively.
+   Add captions (texts) with `text(...)` or `mtext(...)`
+   Complete titles with `title(...)`
+   Complete legend with `legend(...)`

Output adjustment

+   `main` Title of the diagram
+   `xlab` labeling of the x-axis
+   `ylab` labeling of the y-axis
+   `breaks` frequency classes number of bars
+   `col` color filling of the bars
+   `cex` gradual scaling of text size


```r
hist(pH, 
     xlab = "pH value", 
     ylab = "Frequency", 
     main = "",
     breaks = seq(3.5, 8.5, 0.125), 
     col = "red",
     cex = 0.5
     )
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-27-1.png" width="672" />

## All roads lead to `R`ome

When working with code, it is very common that there are several ways to solve the same problem.

**Exercise:** 

+   Calculate all the statistical parameters for one different variable
+   Create boxplots and histograms for clay content and P
+   Calculate correlations between clay content, OC, N, and P

+   And now for the frequency distribution of pH_class, create one of the next plots with the tools we already saw.

In the variable pH_class, pH is classified as:

+   **neutral**: 6.5 to 7.5
+   **alkaline**: over 7.5
+   **acidic**: less than 6.5

**Hint: The three different version are made with a `barplot()`, `plot()` and `hist()`**



### Variant A

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-29-1.png" width="672" />

### Variant B

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-30-1.png" width="672" />

### Variant C

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-31-1.png" width="672" />

#### Solution

<details><summary>See solution</summary>


```r
pH_class_count <- as.data.frame(table(soil_data$pH_class))

# Variant A
barplot(pH_class_count$Freq, space = 0, names = pH_class_count$Var1, 
        xlab = "pH class", ylab = "Frequency", 
        main = "Frequency diagram of pH classes") 

# Variant B
plot(factor(soil_data$pH_class), 
     xlab = "pH class", 
     ylab = "Frequency", 
     main = "Frequency diagram of pH classes")

# Variant C
hist(as.numeric(factor(soil_data$pH_class)),
     breaks = c(0, 1, 2, 3),
     freq = TRUE,
     xaxt = "n",
     xlab = "pH class",
     ylab = "Frequency",
     main = "Frequency diagram of pH classes")
axis(side = 1, at = seq(0.5, 2.5, 1), labels = pH_class_count$Var1)
```


</details>


## Multiple plots in one figure

When you set graphical parameters in Rstudio using this method, it is important to set the properties, plot the figures and reset the properties to the way they were before. Otherwise, every time we plot something, it will follow the set parameters.


```r
par(                              # set or query graphical parameters
  mfrow = c(1, 3),                # 1 x 3 pictures on one plot, equivalent to mfcol = c(3, 1)
  mar = c(5.1, 4.1, 4.1, 2.1),    # margins as c(bottom, left, top, right)
  oma = c(0, 0, 0, 0),            # outer margins in lines of text as c(bottom, left, top, right)
  mgp = c(3, .1, 0),              # margins line for axis title, axis label and axis line
  las = 0,                        # label axis style 
  cex.lab = 1,                    # size of the labels
  cex.axis = 1,                   # size of the axis annotation 
  xpd = FALSE                     # If FALSE, all plotting is clipped to the plot region, if TRUE, all plotting is clipped to the figure region, and if NA, all plotting is clipped to the device region.
    )

plot(…); plot(…); plot(…)

par(mfrow = c(1, 1), 
    mar = c(5.1, 4.1, 4.1, 2.1), 
    oma = c(0, 0, 0, 0), 
    mgp = c(3, 1, 0), 
    las = 0, 
    cex.lab = 1, 
    cex.axis = 1,
    )
```

<img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-34-1.png" width="33%" /><img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-34-2.png" width="33%" /><img src="{{< blogdown/postref >}}index_files/figure-html/unnamed-chunk-34-3.png" width="33%" />

## Plots file output

In R it is possible to export images in the most common formats and can be extended from packages. The output format must be specified and the file will be generated by default in our working directory.


```r
tiff("filename.tiff", width = 21, height = 8, units = "cm", res = 300)

par(…)
	plot(…); plot(…); plot(…)
par(…)

dev.off()
```
Plot export can be done in most of the image formats. E.g. .png, .jpg, .svg, etc. 

# Do I have to learn all these commands by heart?

**No!** R and Rstudio provide several tools to help us do this:

+ **comments**: when running our script, `R` will ignore all the text that start with `#`. Is a good practice to comment our code, is very useful if somebody else need to understand your code or for yourself in the future. In Rstudio, you can comment/uncomment the selected text with `Ctrl+⇧Shift+C`
+ **autocomplete**: Rstudio will suggest possible parameter for a function. Inside a function press the key `Tab ↹`, and it will display a list with the possible parameters for that function. move up `↑` and down `↓` and select with `↵ Return`.
+ **help**: you can select a function and press `F1`, write `?function`, `help(function)` or `help('function')` in the Rstudio console, and it will display the corresponding documentation for that function in the help panel.
+ **cheatsheets**: It is very common that for the most popular packages there are [cheat sheets](https://rstudio.cloud/learn/cheat-sheets) summarizing the most important functions

# Libraries

Many functions are not included in the basic version of R. Therefore, there is an almost confusing variety of additional libraries for special applications.
Examples:

+   `ggplot2` and `lattice` for advanced graphics
+   `dplyr`, `reshape2` and `tidyr` for data manipulation
+   `sp` and `sf` for spatial data (shapefiles, geopackage, etc.)
+   `raster`, `terra`, `stars` for spatial raster data
+   `caret` as wrapping function for machine-learning libraries
+   `RQGIS` and `RSAGA` as bridges to QGIS and SAGA GIS
+   Currently, 18875 available packages in the [CRAN package repository](https://cran.r-project.org/web/checks/check_summary_by_package.html#summary_by_package)
+   some others available on [Github](https://github.com/)

# How to load a library?
![](images/load_library.png)

In the console or the script


```r
install.packages(ggplot2)      # install a library, this has to be executed only once per environment

library(ggplot2)			         # loading a library
detach(ggplot2)			           # Removing a loaded library

```
# References

+   [Wickham, H., & Grolemund, G. (2016). R for data science: import, tidy, transform, visualize, and model data. " O'Reilly Media, Inc.".](https://r4ds.had.co.nz/)
+   [Teetor, P. (2011). R cookbook: Proven recipes for data analysis, statistics, and graphics. " O'Reilly Media, Inc.".](https://rc2e.com/)

