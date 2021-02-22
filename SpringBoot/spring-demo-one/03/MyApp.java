package com.luv2code.springdemo;

// Practice Activity
public class JudoCoach implements Coach {

	public FortuneService fortuneService;
	
	
	public JudoCoach(FortuneService fortuneService) {
		this.fortuneService = fortuneService;
	}
	
	@Override
	public String getDailyWorkout() {
		return "Do a lot of pushups";
	}

	public String getDailyFortune() {
		return fortuneService.getFortune();
	}
}
