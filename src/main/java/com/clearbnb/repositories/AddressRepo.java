package com.clearbnb.repositories;

import com.clearbnb.entities.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepo  extends CrudRepository<Address, Integer> {
    public Address findById(int id);
}
