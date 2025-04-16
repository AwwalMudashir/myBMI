package com.work.DTODemo2.controller;

import com.work.DTODemo2.DTO.UserDTO;
import com.work.DTODemo2.entity.User;
import com.work.DTODemo2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("newuser")
    public User newStudent(@RequestBody UserDTO userDTO){
        System.out.println("Received UserDTO: " + userDTO);
        return userService.newStudent(userDTO);
    }

    @GetMapping("users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("user/{id}")
    public User getUser(@PathVariable int id){
        return userService.getUser(id);
    }

    @DeleteMapping("remove/{id}")
    public String deleteUser(@PathVariable int id){
        return userService.deleteUser(id);
    }

    @PutMapping("update/{id}")
    public String updateUser(@PathVariable int id,@RequestBody UserDTO userDTO){
        return userService.updateUser(id,userDTO);
    }

//    @GetMapping("usersbystatus")
//    public List<User> getUserByStatus(@RequestParam String status){
//        return userService.getUserByStatus(status);
//    }
}
