package com.work.DTODemo2.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "BMI")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    private String fname;
    private String lname;

    private double weight;
    private double height;

    private int age;

    private double bmi;

    private String bmi_status;

    @CreationTimestamp
    private LocalDate date_created;
    public User() {
    }

    public User(String fname, String lname, double weight, double height, int age, double bmi, String bmi_status) {
        this.fname = fname;
        this.lname = lname;
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.bmi = bmi;
        this.bmi_status = bmi_status;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getBmi() {
        return bmi;
    }

    public void setBmi(double bmi) {
        this.bmi = bmi;
    }

    public String getBmi_status() {
        return bmi_status;
    }

    public void setBmi_status(String bmi_status) {
        this.bmi_status = bmi_status;
    }


    @Override
    public String toString() {
        return "User{" +
                "Id=" + Id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", weight=" + weight +
                ", height=" + height +
                ", age=" + age +
                ", bmi=" + bmi +
                ", bmi_status='" + bmi_status + '\'' +
                ", date_created=" + date_created +
                '}';
    }
}
