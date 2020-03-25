package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginPageM {
	WebDriver driver;

	public void browser() {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		// To maximize the size of the webpage
		driver.manage().window().maximize();
		// To wait for the browser to load
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

	}

	public void LoginSwag() {
		// To get the given url in the webpage
		driver.get("https://www.saucedemo.com/");
		System.out.println(driver.getTitle());
	}

	public void UserName(String username) throws IOException, InterruptedException {
		Thread.sleep(3000);
		// To enter the user credentials in the username field
		driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(username);

	}

	public void Password(String password) throws IOException, InterruptedException {
		Thread.sleep(3000);
		// To enter the credentials in the password field
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);

	}

	public void LoginBtn() throws InterruptedException {
		// To click on the login button
		driver.findElement(By.xpath("//input[@class='btn_action']")).click();
		Thread.sleep(3000);
	}

	public void Logout() throws InterruptedException {
		Thread.sleep(3000);
		// To click on the menu button
		driver.findElement(By.xpath("//button[contains(text(),'Open Menu')]")).click();
		// To click on the logout button
		driver.findElement(By.xpath("//a[@id='logout_sidebar_link']")).click();
		// To close the browser
		driver.close();
	}

}
