package com.luv2code.springdemo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyApp {

	public static void main(String[] args) {
		
		FortuneService fortuneService = new HappyFortuneService();
		// create the object
		Coach theCoach = new TrackCoach(fortuneService);
		
		// use the object
		System.out.println(theCoach.getDailyWorkout());
		
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext();
		context.getBean("", Coach.class);
	}
}
