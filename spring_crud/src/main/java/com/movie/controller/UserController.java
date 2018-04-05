package com.movie.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import userModel.userinfo;
import userModel.LogUser;

import com.movie.repository.userrepository;
@RestController
@RequestMapping ("/userinformation")
public class UserController {
	 private userrepository userrepo;
	 
	 public UserController(userrepository userrepo) {
			this.userrepo = userrepo;
		}
	 @GetMapping("/information")
		public List<userinfo> getAll() {
			return userrepo.findAll();
		}
		@RequestMapping(value = "/userdata", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Void> adddetails(@RequestBody userinfo userdata) {
			try {
				userrepo.save(userdata);
				return ResponseEntity.noContent().build();
			}
			 catch (Exception e){
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
			
			 }


		}

		@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Map<String, String>> login(@RequestBody userinfo user) {
			Map<String, String> response = new HashMap<String, String>();
			String email = String.valueOf(user.getEmail());
			String password = String.valueOf(user.getPassword());

			if ((userrepo.findByEmail(email) != null) && (userrepo.findByPassword(password) != null)) {
				response.put("ok", "you succesfully logeed in");
				return ResponseEntity.accepted().body(response);
			} else {
				if(userrepo.findByEmail(email) != null)
				{
					response.put("error" ," you enter wrong Password");
					return ResponseEntity.badRequest().body(response);
				}
				else {
				response.put("error", "your email is wrong" );
				return ResponseEntity.badRequest().body(response);
				}
			}
		}
}



