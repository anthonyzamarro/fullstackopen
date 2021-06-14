title New notes for https://studies.cs.helsinki.fi/exampleapp/notes

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
Server->Browser: Response with 302 redirect
note over Server:
Page is refreshed and all 
assets are fetched again
end note over


