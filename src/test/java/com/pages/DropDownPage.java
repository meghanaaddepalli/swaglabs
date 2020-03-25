package com.pages;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class DropDownPage {
	WebDriver driver;

	public void browser() {
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		// To maximize the window size of the browser
		driver.manage().window().maximize();
		// To wait for the browser to load
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);

	}

	public void LoginSwag() {
		// To get the given url in the webpage
		driver.get("https://www.saucedemo.com/");
		System.out.println(driver.getTitle());
	}

	public void UserName() throws IOException, InterruptedException {
		Thread.sleep(1000);

		// To enter the user credentials in the username text field
		driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("standard_user");

	}

	public void Password() throws IOException, InterruptedException {
		Thread.sleep(1000);

		// To enter the credentials in the password text field
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");

	}

	public void LoginBtn() throws InterruptedException {
		// To clic on the login button
		driver.findElement(By.xpath("//input[@class='btn_action']")).click();
		Thread.sleep(3000);

	}

	public void dropDownBtn() throws InterruptedException {
		// To click on the dropdown box
		Select dropDown1 = new Select(driver.findElement(By.xpath("//select[@class='product_sort_container']")));
		// To select the given value from the dropdown box
		dropDown1.selectByVisibleText("Price (low to high)");
		Thread.sleep(3000);
		// To close the browser
		driver.close();
	}

}
