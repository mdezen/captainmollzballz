import json
import boto3
import uuid

def lambda_handler(event, context):
    print(event)
    dyn_resource = boto3.resource('dynamodb')
    table = dyn_resource.Table('SuggestionTable')
    # what_is_uuid=type(uuid.uuid1())
    # print(what_is_uuid)
    table.put_item(
        Item={
            'SuggestionEntry': event,
            'SuggestionId': str(uuid.uuid1())
        }
        
    )
    return {
        'statusCode': 200,
        'headers': { 
           'Access-Control-Allow-Credentials': 'true',
           'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps('Hello from Lambda!!!!!!!')
    }

