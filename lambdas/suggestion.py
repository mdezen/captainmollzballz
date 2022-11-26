import json
# import boto3
import uuid

def lambda_handler(event, context):
    # print('the event is')
    # print(event["suggestion"])
   
    #dyn_resource = boto3.resource('dynamodb')
    #table = dyn_resource.Table('SuggestionTable')
    # table.put_item(
    #         Item={
    #             'SuggestionEntry': event,
    #             'SuggestionId': str(uuid.uuid1())
    #         }
    #     )
    if is_valid_input(event,"suggestion")==False:
        return {
                    'statusCode': 400,
                    'headers': { 
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps('Hello from Lambda!!!!!!!')
                }
    else:
        return {
                    'statusCode': 200,
                    'headers': { 
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps('Hello from Lambda!!!!!!!')
                }

def is_valid_input(event, key):
    if key not in event:
        False

result = lambda_handler({
    'suggestion': 'test suggestion',
    'name': 'my name'
    }, {})

print(result)