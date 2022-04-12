df = pd.read_excel('edgelist_citations_mastersheet.xlsx')
dfjson = df.to_json(orient="records")
obj = json.loads(dfjson)
  
# Pretty Print JSON
json_formatted_str = json.dumps(obj, indent=4)
print(json_formatted_str)
print(dfjson)
