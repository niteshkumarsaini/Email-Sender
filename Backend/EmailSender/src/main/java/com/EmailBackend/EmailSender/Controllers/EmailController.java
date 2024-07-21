package com.EmailBackend.EmailSender.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.EmailBackend.EmailSender.Entities.Email;
import com.EmailBackend.EmailSender.Entities.Response;
import com.EmailBackend.EmailSender.Services.SendEmail;

@CrossOrigin
@RestController
public class EmailController {
    @Autowired
    private SendEmail sendEmail;

    @PostMapping("/sendEmail")
    public ResponseEntity<?> sendingEmail(@RequestBody Email email){
       boolean response=sendEmail.sendEmail(email);
       if(response){
        return ResponseEntity.ok(new Response("Email has been sent successfully.."));
       }
       else{
        return ResponseEntity.badRequest().body(new Response("Something went wrong while sending mail."));
       }
    }

    
}
