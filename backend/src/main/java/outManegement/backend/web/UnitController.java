package outManegement.backend.web;

import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.common.reflection.XMember;
import org.springframework.web.bind.annotation.*;
import outManegement.backend.domain.Unit;
import outManegement.backend.service.UnitService;

@Slf4j
@RestController
@RequestMapping("/units")
public class UnitController {
    UnitService unitService;

    public UnitController(UnitService unitService) {
        this.unitService = unitService;
    }

    @PostMapping("/create")
    public void createUnits(@RequestParam(required = true) String name){
        Unit unit = new Unit(name);
        unitService.create(unit);
        log.info("create new Unit id = {}, name = {}",unit.getId(),unit.getName());
    }

    @GetMapping("/list")
    public void unitList(){
        unitService.list();
    }
}
