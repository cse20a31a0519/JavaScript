data=["మనిషి మనసు మార్చుకుంటే, ప్రపంచం మారుతుంది.", "జీవితంలో విజయానికి శ్రమే ఏకైక మార్గం.",
    "ఆలోచనలే మనల్ని ముందుకు నడిపించేవి.","స్నేహం ఒక వెలకట్టలేని నిధి." , 
    "తనను నమ్మే వ్యక్తి ఎప్పుడూ వెనుకడుగు వేయడు." ,
   "ప్రతి సమస్యకు పరిష్కారం మన ఆలోచనలలోనే ఉంటుంది.",
   "జీవితం ఒక పుస్తకం, ప్రతి రోజు ఒక పేజీ.", 
    "కష్టం ఎప్పుడూ మన విజయానికి బాటలు వేస్తుంది.",
     "ప్రతిబంధం నీ విజయానికి కంచె కాకుండా మెట్లుగా ఉపయోగించుకో.",
    "సంతోషం మన హృదయానికి త్రాణం."]
 // let colors=["red", "blue","green","yellow","orange","black","FireBrick","Crimson","HotPink","Coral","Tomato","DarkKhaki"]
 function quotes(){
     let output=document.querySelector("span")
     output.textContent=""
     let randomIndex=Math.floor(Math.random()*data.length);
     output.textContent=data[randomIndex]
     // let bgcolor=Math.floor(Math.random()*colors.length);
     // bgcolors=colors[bgcolor]
     let gcolor=getcolor()
     output.style.color=gcolor
 }
 quotes()
 
 function getcolor(){
    let col=['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9]
    let b="#"
     for(let i=0; i<6;i++){
         let c=Math.floor(Math.random()*col.length);
         let tc=col[c]
         b+=tc
        }
     return b
 }