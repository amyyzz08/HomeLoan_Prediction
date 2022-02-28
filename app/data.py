# Dependencies
import pandas as pd

# Read the cities.csv file
df = pd.read_csv("../data/applications.csv")

#Save to data.html file
df.to_html("data.html", index = False)
table = df.to_html()
print(table)