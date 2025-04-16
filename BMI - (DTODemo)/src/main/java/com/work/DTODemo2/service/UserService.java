package com.work.DTODemo2.service;

import com.work.DTODemo2.DTO.UserDTO;
import com.work.DTODemo2.entity.User;
import com.work.DTODemo2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    public User newStudent(UserDTO userDTO) {
        double bmi = 0;
        String bmi_status = "";

        User user = new User();

        bmi = userDTO.getWeight() / Math.pow(userDTO.getHeight(),2) ;

        user.setFname(userDTO.getFname());
        user.setLname(userDTO.getLname());
        user.setAge(userDTO.getAge());
        user.setWeight(userDTO.getWeight());
        user.setHeight(userDTO.getHeight());


        if(bmi < 18){
            bmi_status = "Underweight";
        } else if (bmi >= 18 && bmi < 25) {
            bmi_status = "Normal weight";
        } else if (bmi >=25 && bmi < 30) {
            bmi_status = "Overweight";
        }else{
            bmi_status = "Obese";
        }

        user.setBmi(bmi);
        user.setBmi_status(bmi_status);


        return userRepository.save(user);
    }

    public List<User> getUsers() {
        List<User> users = userRepository.findAll();

        return users;
    }

    public User getUser(int id) {
        return userRepository.findById(id).get();
    }

    public String deleteUser(int id) {
        userRepository.deleteById(id);
        return "Student Deleted Successfully";
    }

    public String updateUser(int id, UserDTO userDTO) {
        User user = userRepository.findById(id).get();

        double bmi = 0;
        String bmi_status = "";


        bmi = userDTO.getWeight() / Math.pow(userDTO.getHeight(),2) ;

        user.setFname(userDTO.getFname());
        user.setLname(userDTO.getLname());
        user.setAge(userDTO.getAge());
        user.setWeight(userDTO.getWeight());
        user.setHeight(userDTO.getHeight());


        if(bmi < 18){
            bmi_status = "Underweight";
        } else if (bmi >= 18 && bmi < 25) {
            bmi_status = "Normal weight";
        } else if (bmi >=25 && bmi < 30) {
            bmi_status = "Overweight";
        }else{
            bmi_status = "Obese";
        }

        user.setBmi(bmi);
        user.setBmi_status(bmi_status);

        userRepository.save(user);

        return "Student Updated Successfully 😁";

    }

//    public List<User> getUserByStatus(String status) {
//        return userRepository.findByBmi_status(status);
//    }
}
