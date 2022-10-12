package outManegement.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import outManegement.backend.dao.Unit;
import outManegement.backend.repository.UnitRepository;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UnitService {
    UnitRepository unitRepository;

    public UnitService(UnitRepository unitRepository) {
        this.unitRepository = unitRepository;
    }

    public Long create(Unit unit){
        return unitRepository.create(unit);
    }

    public List<Unit> list(){
        return unitRepository.list();
    }

    public Optional<Unit> findById(Long id){
        return unitRepository.findById(id);
    }
}
