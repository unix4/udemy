package com.luv2code.springdemo;

public class TrackCoach implements Coach {

	private FortuneService fortuneService; 
	
	public TrackCoach() {
		
	}
	
	public TrackCoach(FortuneService theFortuneService) {
		fortuneService = theFortuneService;
	}
	
	@Override
	public String getDailyWorkout() {
		return "Run a hard 5k";
	}
	
	public String getDailyFortune() {
		return "Just do it!!!" + fortuneService.getFortune();
	}

}
