package com.movie.configue;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import com.movie.repository.FavouriteMovieRepository;
import com.movie.repository.userrepository;




@EnableMongoRepositories(basePackageClasses = FavouriteMovieRepository.class)
@Configuration
public class MongoDBConfigue {
	 @Bean
	    CommandLineRunner commandLineRunner(FavouriteMovieRepository movieRepository) {
	        return null;
	    }
	 CommandLineRunner commandLineRunner(userrepository userrepo) {
	        return null;
	    }
}
