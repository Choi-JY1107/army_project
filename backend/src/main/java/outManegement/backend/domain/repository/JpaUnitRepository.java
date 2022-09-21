package outManegement.backend.domain.repository;


import org.springframework.stereotype.Component;
import outManegement.backend.domain.Account;
import outManegement.backend.domain.Unit;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Component
public class JpaUnitRepository implements UnitRepository{
    private final EntityManager em;

    public JpaUnitRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public List<Unit> list() {
        return em.createQuery("select un from unit un", Unit.class).getResultList();
    }

    @Override
    public Long create(Unit unit) {
        em.persist(unit);
        return unit.getId();
    }

    @Override
    public Optional<Unit> findById(Long id) {
        Unit unit = em.find(Unit.class, id);
        return Optional.ofNullable(unit);
    }
}
