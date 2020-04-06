package com.clearbnb.controllers;

import com.clearbnb.entities.AmenitiesResidencesId;
import com.clearbnb.services.AmenitiesResidencesIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AmenitiesResidencesIdController {
    @Autowired
    AmenitiesResidencesIdService amenitiesResidencesIdService;

    @GetMapping("/api/clearbnb/amxres")
    public List<AmenitiesResidencesId> getAmenitiesResidencesId() {
        return amenitiesResidencesIdService.getAmenitiesResidencesId();
    }

    @PostMapping("/api/clearbnb/amxres")
    public AmenitiesResidencesId createAmenitiesresidencesid(@RequestBody AmenitiesResidencesId amenityresidencesid) {
        return amenitiesResidencesIdService.createamenitiesresidencesid(amenityresidencesid);
    }

    /*@PostMapping("/api/clearbnb/amxresbyresidenceid/{residence_id}")
    public AmenitiesXresidences findById(int residence_id){
        return amenitiesXresidencesService.findById(int residence_id)(amenitiesXresidences);
    }*/

    @DeleteMapping("/api/clearbnb/amenitiesbyresidence/{residence_id}")
    public void deleteAmenitiesresidencesid(@PathVariable int residence_id) {
        amenitiesResidencesIdService.deleteAmenitiesresidencesid(residence_id);
    }
}
