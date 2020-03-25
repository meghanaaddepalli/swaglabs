package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AllItemsPage {
	WebDriver driver;

	public void browser() {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		// To maximize the window size of the webpage
		driver.manage().window().maximize();
		// To wait for the webpage to load
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

	}

	public void LoginSwag() {
		// To get the given url in the webpage
		driver.get("https://www.saucedemo.com/");
		System.out.println(driver.getTitle());
	}

	public void UserName() throws IOException, InterruptedException {
		Thread.sleep(1000);

		// To eter the user credentials in the username field
		driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("standard_user");

	}

	public void Password() throws IOException, InterruptedException {
		Thread.sleep(1000);

		// To enter the credentials in the password text field
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");

	}

	public void LoginBtn() throws InterruptedException {
		// To click on the login button
		driver.findElement(By.xpath("//input[@class='btn_action']")).click();
		Thread.sleep(3000);

	}

	public void menuBtn() throws InterruptedException {
		// To click on the menu button
		driver.findElement(By.xpath("//button[contains(text(),'Open Menu')]")).click();
		Thread.sleep(3000);

	}

	public void AllItem() throws InterruptedException {
		driver.findElement(By.xpath("//a[@id='inventory_sidebar_link']")).click();
		Thread.sleep(3000);
		// To close the browser
		driver.close();
	}

}
