package com.vaishnav.sdedvaralbackend.config;



import com.vaishnav.sdedvaralbackend.auth.CustomLogoutHandler;
import com.vaishnav.sdedvaralbackend.auth.CustomLogoutSuccessHandler;
import com.vaishnav.sdedvaralbackend.repo.TokenRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

@Configuration
public class LogoutConfiguration {

    @Bean
    public CustomLogoutHandler logoutHandler(TokenRepo tokenRepo, JwtService jwtService) {
        return new CustomLogoutHandler(tokenRepo, jwtService);
    }

    @Bean
    public LogoutSuccessHandler logoutSuccessHandler() {
        return new CustomLogoutSuccessHandler();
    }
}
