package com.movie.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.movie.model.Movie;

import userModel.userinfo;
public interface  userrepository extends MongoRepository<userinfo ,String> { 
	userinfo findByEmail(String email);
	userinfo findByPassword(String password);

}
