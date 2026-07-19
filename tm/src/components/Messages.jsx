import React, { useState } from 'react';
import './Messages.css';
import CL from '../assets/CL.png'; 

function Messages() {
 
  const [activeChatId, setActiveChatId] = useState(1);
  

  const [inputText, setInputText] = useState('');


  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Mike Johnson",
      role: "Player",
      status: "online",
      typingStatus: "Typing...",
      avatar: CL, // You can easily change this to a different image import later
      messages: [
        { id: 1, text: "Bro you will actually never believe this! A scout from Apex Elite Academy literally just messaged me on the app!!! She said she saw my clips and stats and wants to pull up to our game this Saturday to watch me play live!! And she mentioned inviting me to their tryouts if it goes well I'm literally shaking rn let's goooo", sender: "You", side: "right", time: "11:07 am" },
        { id: 2, text: "Nah bro u fr", sender: "Mike Johnson", side: "left", time: "11:09 am" },
        { id: 3, text: "congrats bro", sender: "Mike Johnson", side: "left", time: "11:09 am" }
      ]
    },
    {
      id: 2,
      name: "Vanessa Tucker",
      role: "Scout",
      status: "online",
      typingStatus: "Online",
      avatar: CL,
      messages: [
        { id: 1, text: "Hello, I’ve been tracking your stats and clips on here and like what I see. When is your next game? We'd love to come watch you play live. If everything looks good, we'd like to invite you out for our upcoming tryouts. Let me know your schedule! Best, Vanessa Tucker, Apex Elite Academy.", sender: "Vanessa Tucker", side: "left", time: "9:00 am" },
        { id: 2, text: "Hello, thanks for reaching out! I'd love to have you come watch. Our next game is this Saturday at 2:00 PM at the Downtown Sports Complex. We are playing the City Titans. I'll make sure to update you with the exact field number once it's confirmed. Looking forward to the opportunity!", sender: "You", side: "right", time: "11:05 am" }
      ]
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Player",
      status: "Offline",
      typingStatus: "Offline",
      avatar: CL,
      messages: [
        { id: 1, text: "Hey! How's the new app coming along?", sender: "Mike Johnson", side: "left", time: "9:15 am" },
        { id: 2, text: "It is looking completely amazing right now!", sender: "You", side: "right", time: "9:20 am" }
      ]
    }
  ]);

  
  const activeChat = chats.find(chat => chat.id === activeChatId);

 
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: activeChat.messages.length + 1,
      text: inputText,
      sender: "You",
      side: "right",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };

   
    const updatedChats = chats.map(chat => {
      if (chat.id === activeChatId) {
        return { ...chat, messages: [...chat.messages, newMessage] };
      }
      return chat;
    });

    setChats(updatedChats);
    setInputText(''); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <main className="content">
      <div className="container p-0">
        <h1 className="h3 mb-3">Messages</h1>

        <div className="card">
          <div className="row g-0">
            
            
            <div className="col-12 col-lg-5 col-xl-3 border-right">
              <div className="px-4 d-none d-md-block">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1">
                    <input type="text" className="form-control my-3" placeholder="Search..." />
                  </div>
                </div>
              </div>

             
              {chats.map(contact => (
                <a 
                  key={contact.id} 
                  href="#" 
                  className={`list-group-item list-group-item-action border-0 ${activeChatId === contact.id ? 'active-contact' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    setActiveChatId(contact.id); 
                  }}
                >
                  <div className="d-flex align-items-start">
                    <img src={contact.avatar} className="rounded-circle mr-1" alt={contact.name} width="40" height="40" />
                    
                    
                    <div className="flex-grow-1 ml-3">
                      <div className="d-flex align-items-center">
                        {contact.name}
                        <span className={`role-badge ${contact.role === 'Scout' ? 'badge-scout' : 'badge-player'}`}>
                          {contact.role}
                        </span>
                      </div>
                      <div className="small"><span className={`fas fa-circle ${contact.status === 'online' ? 'chat-online' : 'chat-offline'}`}></span> 
                        {contact.status === 'online' ? ' Online' : ' Offline'}
                      </div>
                    </div>
                    

                  </div>
                </a>
              ))}
              
              <hr className="d-block d-lg-none mt-1 mb-0" />
            </div>

            
            <div className="col-12 col-lg-7 col-xl-9">
              
              
              <div className="py-2 px-4 border-bottom d-none d-lg-block">
                <div className="d-flex align-items-center py-1">
                  <div className="position-relative">
                    <img src={activeChat.avatar} className="rounded-circle mr-1" alt={activeChat.name} width="40" height="40" />
                  </div>
                  <div className="flex-grow-1 pl-3">
                    <strong>{activeChat.name}</strong>
                    <div className="text-muted small"><em>{activeChat.typingStatus}</em></div>
                  </div>
                </div>
              </div>

              
              <div className="position-relative">
                <div className="chat-messages p-4">
                  
                  {activeChat.messages.map((msg) => (
                    <div key={msg.id} className={msg.side === 'left' ? "chat-message-left pb-4" : "chat-message-right pb-4"}>
                      
                      {msg.side === 'left' && (
                        <div>
                          
                          <img src={activeChat.avatar} className="rounded-circle" alt={msg.sender} width="40" height="40" />
                          <div className="text-muted small text-nowrap mt-2">{msg.time}</div>
                        </div>
                      )}

                      <div className="flex-shrink-1 bg-light rounded py-2 px-3">
                        <div className="font-weight-bold mb-1">{msg.sender}</div>
                        {msg.text}
                      </div>

                      {msg.side === 'right' && (
                        <div>
                          {/* Your profile pic */}
                          <img src={CL} className="rounded-circle" alt={msg.sender} width="40" height="40" />
                          <div className="text-muted small text-nowrap mt-2">{msg.time}</div>
                        </div>
                      )}

                    </div>
                  ))}

                </div>
              </div>

              
              <div className="flex-grow-1 py-3 px-4 border-top">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Type your message" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Messages;