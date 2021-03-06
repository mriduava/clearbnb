package com.clearbnb.controllers;
import com.clearbnb.entities.Booking;
import com.clearbnb.entities.User;
import com.clearbnb.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {
    @Autowired
    BookingService bookingService;

    @GetMapping("/api/clearbnb/bookings")
    public List<Booking> getAllBookings(){
        return bookingService.findAllBookings();
    }

    @GetMapping("/api/clearbnb/bookings/{id}")
    public Booking getOneBooking(@PathVariable int id) {
        return bookingService.getOneBooking(id);
    }

    @GetMapping("/api/clearbnb/bookingsByResidenceId/{residence_id}")
    public List<Booking> getAllBookingsByResidenceId(@PathVariable int residence_id) {
        return bookingService.getAllBookingsByResidenceId(residence_id);
    }

    @GetMapping("/api/clearbnb/bookingsByOwnerId/{owner_id}")
    public List<Booking> getAllBookingsByOwnerId(@PathVariable int owner_id) {
        return bookingService.getAllBookingsByOwnerId(owner_id);
    }

    @PostMapping("/api/clearbnb/bookings")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    @DeleteMapping("/api/clearbnb/bookings/{id}")
    public void deleteBooking(@PathVariable int id) {
        bookingService.deleteBooking(id);
    }

    @GetMapping("/api/clearbnb/bookingsbyuserid/{user_id}")
    public List<Booking> getBookingByUser(@PathVariable int user_id){
        return bookingService.getBookingByUserId(user_id);
    }
}
