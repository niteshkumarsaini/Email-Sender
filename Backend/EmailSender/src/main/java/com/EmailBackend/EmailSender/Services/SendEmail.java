package com.EmailBackend.EmailSender.Services;

import java.util.Properties;

import org.springframework.stereotype.Service;

import com.EmailBackend.EmailSender.Entities.Email;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

@Service
public class SendEmail {
    
    public boolean sendEmail(Email email){
        boolean flag=false;
            String from="from mail";
            String host="smtp.gmail.com";
            Properties properties=System.getProperties();
            properties.put("mail.smtp.host", host);
            properties.put("mail.smtp.port", "465");
            properties.put("mail.smtp.ssl.enable", "true");
            properties.put("mail.smtp.auth","true");
            
            
            //Fetching Session
            Session session=Session.getInstance(properties,new Authenticator() {
    
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
            
                    return new PasswordAuthentication("from mail","*******");
                    
                }
    
            
            
            });
            session.setDebug(true);
        
            
            MimeMessage m=new MimeMessage(session);
            try {
                m.setFrom(from);
                m.addRecipient(Message.RecipientType.TO, new InternetAddress(email.getTo()));
                m.setSubject(email.getSubject());
                m.setText(email.getMessage());
                Transport.send(m);
                System.out.println("Email Send Successfullyy....");
                flag=true;
            }
            catch(Exception e) {
                e.printStackTrace();
            }
                    
      
        return flag;

    }
    
}
