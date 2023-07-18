import csv
import json

# Open the CSV file and read its contents
with open('ASVS-4.0.3.csv', 'r') as csv_file:
    reader = csv.DictReader(csv_file)

    # Convert each row into a dictionary and add it to a list
    list_of_dicts = [row for row in reader]

# Open a new JSON file and write the list of dictionaries to it
with open('ASVS-4.0.3.json', 'w') as json_file:
    json.dump(list_of_dicts, json_file)