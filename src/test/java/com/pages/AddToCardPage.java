package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AddToCardPage {
	WebDriver driver;

	public void browser() {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		//To maximize the window size of the webpage
		driver.manage().window().maximize();
		//To wait for the webpage to load
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

	}

	public void LoginSwag() {
		//To get the given url in the browser
		driver.get("https://www.saucedemo.com/");
		System.out.println(driver.getTitle());
	}

	public void UserName() throws IOException, InterruptedException {
		Thread.sleep(1000);
		
//To enter the user credentials in the username text field
		driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("standard_user");

	}

	public void Password() throws IOException, InterruptedException {
		Thread.sleep(1000);
		
//To enter the credentials in the password text field
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");

	}

	public void LoginBtn() throws InterruptedException {
		//To click on the login button
		driver.findElement(By.xpath("//input[@class='btn_action']")).click();
		Thread.sleep(3000);
		
	}

	public void AddToCardBtn() throws InterruptedException {
		driver.findElement(By.xpath(
				"//body[@class='main-body']//div[@id='inventory_container']//div[@id='inventory_container']//div[2]//div[3]//button[1]"))
				.click();
		Thread.sleep(3000);
	}

	public void CardBtn() throws InterruptedException {
		driver.findElement(By.xpath("//span[@class='fa-layers-counter shopping_cart_badge']")).click();
		Thread.sleep(3000);
	}

	public void CheckOutBtn() throws InterruptedException {
		driver.findElement(By.xpath("//a[@class='btn_action checkout_button']")).click();
		Thread.sleep(3000);
	}

	public void FirstName() throws InterruptedException {
		//To enter value in the first name field
		driver.findElement(By.xpath("//input[@id='first-name']")).sendKeys("Suratha");
		Thread.sleep(3000);

	}

	public void LastName() throws InterruptedException {
		//To enter value in the last name text field
		driver.findElement(By.xpath("//input[@id='last-name']")).sendKeys("Subramaniyan");
		Thread.sleep(3000);

	}

	public void ZipCode() throws InterruptedException {
		//To enter value in the postal code field
		driver.findElement(By.xpath("//input[@id='postal-code']")).sendKeys("614901");
		Thread.sleep(3000);

	}

	public void ContinueBtn() throws InterruptedException {
		//To click on continue button
		driver.findElement(By.xpath("//input[@class='btn_primary cart_button']")).click();
		Thread.sleep(3000);

	}
	public void FinishBtn() throws InterruptedException {
		driver.findElement(By.xpath("//a[@class='btn_action cart_button']")).click();
		Thread.sleep(3000);
		//To close the browser
		driver.close();
	}
}
