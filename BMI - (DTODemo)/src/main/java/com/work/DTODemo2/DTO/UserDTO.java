package com.work.DTODemo2.DTO;

public class UserDTO {
    private String fname;
    private String lname;
    private int age;
    private double weight;
    private double height;

    public UserDTO() {
    }

    public UserDTO(String fname, String lname, int age, double weight, double height) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.weight = weight;
        this.height = height;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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

    @Override
    public String toString() {
        return "UserDTO{" +
                "fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", age=" + age +
                ", weight=" + weight +
                ", height=" + height +
                '}';
    }
}
