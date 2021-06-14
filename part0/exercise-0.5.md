title New notes for https://studies.cs.helsinki.fi/exampleapp/notes/spa

Browser->Server: GET request for document
Server->Browser: Response with document
Browser->Server: GET request for CSS
Server->Browser: Response with CSS
Browser->Server: GET request for JS
Server->Browser: Response with JS
note left of Browser: browser executes JS
Server-->Browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]
note over Browser:
browser executes the event handler
that renders notes to display
end note
User->Browser: Enters note data into input field
Browser->Server: POST request with user input
note over Server:
browser receives the data as json
end note
Server->Browser: Page is updated asynchronously
note over Browser:
Only one request is made 
for the data rather than 
requesting all of the assets 
again
end note over


