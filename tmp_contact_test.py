import json, urllib.request, urllib.error
url = 'https://backend-yrc.onrender.com/api/v1/contact'
variants = [
    {'name': 'Test User', 'email': 'test@example.com', 'phone': '1234567890', 'message': 'Hello from test.'},
    {'contact': {'name': 'Test User', 'email': 'test@example.com', 'phone': '1234567890', 'message': 'Hello from test.'}},
    {'data': {'name': 'Test User', 'email': 'test@example.com', 'phone': '1234567890', 'message': 'Hello from test.'}},
    {'name': 'Test User', 'email': 'test@example.com', 'phoneno': '1234567890', 'message': 'Hello from test.'},
    {'name': 'Test User', 'email': 'test@example.com', 'phoneNumber': '1234567890', 'message': 'Hello from test.'},
    {'name': 'Test User', 'email': 'test@example.com', 'mobile': '1234567890', 'message': 'Hello from test.'},
    {'name': 'Test User', 'email': 'test@example.com', 'phone': '1234567890', 'msg': 'Hello from test.'},
    {'name': 'Test User', 'email': 'test@example.com', 'phone': '1234567890', 'message': 'Hello', 'subject': 'Contact Form'},
]
for v in variants:
    payload = json.dumps(v).encode('utf-8')
    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'}, method='POST')
    try:
        with urllib.request.urlopen(req) as r:
            body = r.read().decode()
            print('OK', v, r.status, body[:200])
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print('ERR', v, e.code, body)
    except Exception as e:
        print('EXC', v, e)
